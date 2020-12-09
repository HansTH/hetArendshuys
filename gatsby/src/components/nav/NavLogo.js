import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/arendshuys-logo.svg';

export default function NavLogo() {
	return (
		<NavLogoStyles>
			<img src={logo} alt='het Arendshuys logo' />
		</NavLogoStyles>
	);
}

const NavLogoStyles = styled.div`
	height: 337px;
`;
