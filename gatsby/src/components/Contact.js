import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import useForm from '../utils/useForm';

export default function Contact() {
	const {
		values,
		updateValues,
		error,
		loading,
		message,
		submitForm,
	} = useForm();

	return (
		<>
			<SEO title='Contact' />
			<ContactStyles loading={`${loading}`}>
				{/* <div className='container'> */}
				<div className='contact-form'>
					<form id='contact' onSubmit={(e) => submitForm(e, values)}>
						<label htmlFor='name'>Naam</label>
						<input
							type='text'
							id='name'
							name='naam'
							value={values.naam}
							onChange={updateValues}
							required
							placeholder='* Uw naam'
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							name='email'
							value={values.email}
							onChange={updateValues}
							required
							placeholder='* Uw email'
						/>
						<label htmlFor='message'>Vraag of een opmerking</label>
						<textarea
							name='bericht'
							id='message'
							cols='30'
							rows='10'
							value={values.bericht}
							onChange={updateValues}
							required
							placeholder='* Wat is uw vraag of opmerking?'
						></textarea>
						<div className='arendshuys'>
							<input
								type='arendshuys'
								id='arendshuys'
								name='arendshuys'
								value={values.arendshuys}
								onChange={updateValues}
							/>
						</div>
						<p>* Verplichte velden</p>
						<button type='submit' disabled={loading}>
							{loading ? 'Wordt verstuurd...' : 'Versturen'}
						</button>
						<div>{error ? <h4>Error: {error}</h4> : ''}</div>
						<div>{message ? <h4>{message}</h4> : ''}</div>
					</form>
				</div>
				{/* </div> */}
			</ContactStyles>
		</>
	);
}

const ContactStyles = styled.div`
	width: 100%;
	.arendshuys {
		display: none;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;

		label {
			margin: 0.5rem 0 0.25rem;
		}

		input,
		textarea {
			width: 100%;
			padding: 0.5rem;
			border: 2px solid var(--yellow);
			border-radius: 6px;
		}

		p {
			font-size: 0.9rem;
		}

		button {
			display: inline-block;
			border: 2px solid var(--yellow);
			border-radius: 4px;
			padding: 0.5rem 0.75rem;
			background-color: var(--yellow);
			color: var(--blue);
			margin-top: 0.5rem;

			&:hover,
			&:focus {
				cursor: ${({ loading }) => (loading === 'true' ? '' : 'pointer')};
				background-color: ${({ loading }) =>
					loading === 'true' ? `var(--yellow)` : `var(--light-yellow)`};
			}
		}
	}
`;
