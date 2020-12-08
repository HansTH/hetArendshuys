import React from 'react';
import styled from 'styled-components';

export default function Header({ bgImage }) {
	return <HeaderStyles bgImage={bgImage.asset.fluid} />;
}

const HeaderStyles = styled.div`
	width: 100vw;
	height: 600px;
	background-image: url(${({ bgImage }) => bgImage.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`;
