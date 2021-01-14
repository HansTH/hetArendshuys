import { useState } from 'react';

export default function useForm() {
  const [values, setValues] = useState({
    naam: '',
    email: '',
    bericht: '',
    arendshuys: '',
  });

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  function updateValues(e) {
    let { value } = e.target;

    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }

    setValues({
      ...values,
      [e.target.name]: value,
    });
  }

  async function submitForm(e, input) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    // get all data
    const body = {
      naam: input.naam,
      email: input.email,
      bericht: input.bericht,
      arendshuys: input.arendshuys,
    };
    console.log(body);
    // send data to the serverless function when submit
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/submitform`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    // check if everthing worked
    const text = JSON.parse(await res.text());

    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage('Gelukt, uw bericht is verstuurd.');
      setValues({
        naam: '',
        email: '',
        bericht: '',
        arendshuys: '',
      });
    }

    function clearSubmitMessage() {
      setMessage('');
    }
    setTimeout(clearSubmitMessage, 5000);
  }

  return {
    values,
    updateValues,
    error,
    loading,
    message,
    submitForm,
  };
}
