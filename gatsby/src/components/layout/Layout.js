import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import 'normalize.css';
import Footer from './Footer';
import TopNavbar from '../nav/TopNavbar';
import MobileNavbar from '../nav/MobileNavbar';

export default function Layout({ children }) {
  const SCROLL_HEIGHT = 200;

  const SCROLL_TOP = useRef();
  const baseUri = useRef();

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);
  const [fixedPosition, setFixedPosition] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollingElement.scrollTop;
    if (scrollTop > SCROLL_HEIGHT) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  const handleToggleSideNavbar = () => {
    setIsSideNavbarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    SCROLL_TOP.current = document.scrollingElement.scrollTop;
    if (SCROLL_TOP.current > SCROLL_HEIGHT) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  }, []);

  useEffect(() => {
    baseUri.current = document.baseURI;
    console.log(baseUri.current);

    if (
      baseUri.current === 'https://www.xyztest.nl/' ||
      baseUri.current === 'https://hetarendshuys.netlify.app/' ||
      baseUri.current === 'http://localhost:8000/' ||
      baseUri.current === 'http://localhost:8888/'
    ) {
      setFixedPosition(false);
      console.log(false, process.env.BASE_URL_WEBSITE);
    } else {
      setFixedPosition(true);
      console.log(true, process.env.BASE_URL_WEBSITE);
    }
  }, [children]);

  const data = useStaticQuery(graphql`
    {
      storeData: allSanityWinkel {
        nodes {
          winkel {
            storeName
            slogan
            storeHours {
              openingHour
              day
              closed
              closeHour
            }
            contactInfo {
              zipcode
              telefoonNumber
              email
              city
              address
            }
            socialMediaData: socialMediaLinks {
              socialMediaUrl
              socialMediaName
            }
          }
        }
      }
    }
  `);

  const [{ winkel }] = data.storeData.nodes;
  console.log(winkel.socialMediaData);
  return (
    <LayoutStyles fixedPosition={fixedPosition}>
      <GlobalStyles />
      <TopNavbar
        hasScrolled={hasScrolled}
        fixedPosition={fixedPosition}
        socialLinks={winkel.socialMediaData}
      />
      <MobileNavbar
        isSideNavbarOpen={isSideNavbarOpen}
        toggleSideNavbar={handleToggleSideNavbar}
        socialLinks={winkel.socialMediaData}
      />
      <main>{children}</main>
      <Footer footerInfo={data.storeData} />
    </LayoutStyles>
  );
}

const LayoutStyles = styled.div`
  main {
    z-index: 0;
  }
`;
