import React from 'react';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import NavLogo from './NavLogo';
import { breakpoint } from '../../styles/breakpoints';

export default function SideNavbar({
	hasScrolled,
	isSideNavbarOpen,
	toggleSideNavbar,
	socialLinks,
}) {
	return (
		<div className='container'>
			<SideNavbarStyles
				hasScrolled={hasScrolled}
				isSideNavbarOpen={isSideNavbarOpen}
				toggleSideNavbar={isSideNavbarOpen}
			>
				<NavLogo />
				<div className='separator-line' />
				<div className='side-nav-links'>
					<NavLinks
						flexDirection='column'
						toggleSideNavbar={toggleSideNavbar}
					/>
				</div>
				<div className='side-social-links'>
					<SocialLinks flexDirection='row' links={socialLinks} />
				</div>
			</SideNavbarStyles>
		</div>
	);
}

const SideNavbarStyles = styled.nav`
	width: 200px;
	background-color: var(--blue);
	position: ${({ isSideNavbarOpen }) =>
		isSideNavbarOpen ? 'fixed' : 'absolute'};
	border-radius: 0 0 4px 6px;
	top: ${({ hasScrolled }) => (hasScrolled ? `-600px` : `0`)};
	transition: all ease-in-out 0.3s;
	z-index: 1000;

	.separator-line {
		width: 100%;
		height: 2px;
		background-color: var(--yellow);
		margin-bottom: 1rem;
	}

	.side-nav-links a {
		padding: 0.5rem 1rem;
	}

	.side-social-links {
		padding: 1rem;
	}

	@media ${breakpoint.sm} {
		top: ${({ isSideNavbarOpen }) => (isSideNavbarOpen ? `0` : `-600px`)};
	}
`;
