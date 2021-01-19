import React from 'react';
import styled from 'styled-components';
import privacyData from '../assets/data/privacy';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title='Privacy' />
      <PrivacyStyles>
        <SectionTitle title='Privacy verklaring'>
          <div className='container'>
            <div className='privacy-table'>
              {/* <h3>Inhoudsopgave:</h3> */}
              <>
                {privacyData('hello').map((data) => (
                  <>
                    <button key={data.id}>
                      <h4>{data.header}</h4>
                    </button>
                    <div className='privacy-content'>{data.content}</div>
                  </>
                ))}
              </>
            </div>
          </div>
        </SectionTitle>
      </PrivacyStyles>
    </>
  );
}

const PrivacyStyles = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: var(--blue);

  .privacy-table {
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1.1rem;

      strong {
        font-weight: bold;
      }
    }
    a {
      color: var(--blue);
    }
  }

  button {
    background-color: var(--yellow);
    color: var(--blue);
    border: none;
    border-radius: 4px;
    padding: 0.3rem 0.5rem;
    width: 100%;
    margin: 1rem 0 0.25rem;

    &:hover {
      background-color: var(--blue);
      color: var(--yellow);
    }
  }

  .privacy-content {
    border: 2px solid var(--yellow);
    border-radius: 4px;
    padding: 0.5rem;
  }
`;
