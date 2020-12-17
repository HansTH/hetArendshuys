import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/arendshuys-logo-small.svg';

export default function NavLogoSmall() {
	return (
		<NavLogoSmallStyles>
			<Link to='/'>
				<img src={logo} alt='het Arendshuys logo' />
			</Link>
		</NavLogoSmallStyles>
	);
}

const NavLogoSmallStyles = styled.div`
	width: 90px;
	height: 71px;
	border: 2px solid var(--blue);

	img {
		object-fit: cover;
		height: 100%;
	}
`;
