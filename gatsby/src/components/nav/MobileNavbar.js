import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';
import Menubutton from './Menubutton';
import NavLogoSmall from './NavLogoSmall';
import SideNavbar from './SideNavbar';

export default function MobileNavbar({
  isSideNavbarOpen,
  toggleSideNavbar,
  socialLinks,
}) {
  return (
    <MobileNavbarStyles>
      <Overlay isOpen={isSideNavbarOpen} toggleSideNavbar={toggleSideNavbar} />
      <SideNavbar
        isSideNavbarOpen={isSideNavbarOpen}
        toggleSideNavbar={toggleSideNavbar}
        socialLinks={socialLinks}
      />
      <div className='container'>
        <div className='mobile-navbar'>
          <NavLogoSmall />
          <Menubutton
            isSideNavbarOpen={isSideNavbarOpen}
            toggleSideNavbar={toggleSideNavbar}
          />
        </div>
      </div>
    </MobileNavbarStyles>
  );
}

const MobileNavbarStyles = styled.div`
  display: none;
  z-index: 1000;
  position: fixed;
  width: 100%;
  margin-top: 1rem;

  .mobile-navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media ${breakpoint.sm} {
    display: block;
  }
`;

/* Overlay when Sidebar on small screens is showing */
function Overlay({ isOpen, toggleSideNavbar }) {
  return <OverlayStyles isOpen={isOpen} onClick={toggleSideNavbar} />;
}

const OverlayStyles = styled.div`
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  transition: display ease-in-out 0.9s;
  transition-delay: 0.3s;

  /* Breakpoints */
  @media ${breakpoint.md} {
    display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    background-color: ${({ isOpen }) =>
      isOpen ? `rgba(0, 0, 0, 0.4)` : `rgba(0, 0, 0, 1)`};
    backdrop-filter: blur(5px);
  }
`;
