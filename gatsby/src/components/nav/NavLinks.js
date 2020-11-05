import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function NavLinks({ flexDirection, toggleSideNavbar }) {
	return (
		<NavLinksStyles flexDirection={flexDirection}>
			<Link onClick={toggleSideNavbar} to='/'>
				Winkel
			</Link>
			<Link onClick={toggleSideNavbar} to='/merken'>
				Merken
			</Link>
			<Link onClick={toggleSideNavbar} to='/nieuws'>
				Nieuws
			</Link>
			<Link onClick={toggleSideNavbar} to='/'>
				Contact
			</Link>
		</NavLinksStyles>
	);
}

const NavLinksStyles = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};

	a {
		color: var(--light-yellow);

		&:hover,
		:focus {
			color: var(--yellow);
		}
	}
`;
