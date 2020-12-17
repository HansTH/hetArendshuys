import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';
import Menubutton from './Menubutton';
import NavLogoSmall from './NavLogoSmall';

export default function MobileNavbar({ isSideNavbarOpen, toggleSideNavbar }) {
	return (
		<MobileNavbarStyles>
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
	z-index: 100;
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
