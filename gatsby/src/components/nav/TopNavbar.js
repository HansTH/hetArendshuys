import React from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import { breakpoint } from '../../styles/breakpoints';
import SocialLinks from './SocialLinks';
import NavLogoSmall from './NavLogoSmall';
import SideNavbar from './SideNavbar';

export default function TopNavbar({ hasScrolled, fixedPosition, socialLinks }) {
  return (
    <TopNavbarStyles hasScrolled={hasScrolled} fixedPosition={fixedPosition}>
      <div className='top-navbar'>
        <div className='container'>
          <div className='navbar'>
            <div className='top-nav-logo'>
              <NavLogoSmall />
            </div>
            <div className='top-nav-links'>
              <NavLinks flexDirection='row' />
              <SocialLinks flexDirection='row' links={socialLinks} />
            </div>
          </div>
        </div>
      </div>
      <div className='side-navbar'>
        <SideNavbar hasScrolled={hasScrolled} socialLinks={socialLinks} />
      </div>
    </TopNavbarStyles>
  );
}

const TopNavbarStyles = styled.nav`
  .top-navbar {
    position: fixed;
    top: ${({ hasScrolled, fixedPosition }) =>
      !hasScrolled && !fixedPosition ? `-100px` : `0`};
    background-color: var(--blue);
    width: 100%;
    transition: all ease-in-out 0.3s;
    z-index: 100;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;

    .top-nav-logo {
      width: 90px;
    }

    .top-nav-links {
      display: flex;
      align-items: center;

      a {
        padding: 0 0.5rem;

        &:hover {
          color: var(--yellow);
        }
      }
    }
  }

  .side-navbar {
    display: ${({ fixedPosition }) => (fixedPosition ? 'none' : 'block')};
  }

  /* Breakpoints */
  @media ${breakpoint.sm} {
    display: none;
  }
`;
