import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import privacyData from '../assets/data/privacy';
import SectionTitle from '../components/SectionTitle';
import SEO from '../components/SEO';

export default function Privacy() {
  const { storeData } = useStaticQuery(graphql`
    {
      storeData: allSanityWinkel {
        nodes {
          winkel {
            storeName
            contactInfo {
              zipcode
              telefoonNumber
              email
              city
              address
            }
          }
        }
      }
    }
  `);
  const storedata = storeData.nodes[0].winkel;

  const [pData, setPData] = useState([]);

  useEffect(() => {
    setPData(privacyData(storedata));
  }, [storedata]);

  const handleCollapseContent = (id, data) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        if (item.isCollapse === true) {
          return {
            ...item,
            isCollapse: false,
          };
        } else {
          return {
            ...item,
            isCollapse: true,
          };
        }
      } else {
        return {
          ...item,
          isCollapse: false,
        };
      }
    });
    setPData(newData);
  };

  return (
    <>
      <SEO title='Privacy' />
      <PrivacyStyles>
        <SectionTitle title='Privacy verklaring'>
          <div className='container'>
            <div className='privacy-table'>
              <>
                {pData.map((item) => (
                  <div key={item.id}>
                    <ButtonStyles
                      key={item.id}
                      isCollapse={item.isCollapse}
                      onClick={() => handleCollapseContent(item.id, pData)}
                    >
                      <h4>{item.header}</h4>
                    </ButtonStyles>
                    <PrivacyContent isCollapse={item.isCollapse}>
                      {item.content}
                    </PrivacyContent>
                  </div>
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
  max-width: 800px;
  margin: 0 auto;

  .privacy-table {
    h4 {
      font-size: 1.2rem;
      font-weight: 400;
    }
    p {
      font-size: 1.1rem;
    }
    a {
      color: var(--blue);
    }
  }
`;

const ButtonStyles = styled.button`
  background-color: ${({ isCollapse }) =>
    isCollapse ? 'var(--blue)' : 'var(--yellow)'};
  color: ${({ isCollapse }) => (isCollapse ? 'var(--yellow)' : 'var(--blue)')};
  border: none;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: ${({ isCollapse }) => (isCollapse ? '0.5rem' : '0')};

  &:hover {
    background-color: var(--blue);
    color: var(--yellow);
  }
`;

const PrivacyContent = styled.div`
  border: 2px solid var(--yellow);
  border-radius: 4px;
  padding: 0.5rem;
  display: ${({ isCollapse }) => (isCollapse ? 'block' : 'none')};
`;
