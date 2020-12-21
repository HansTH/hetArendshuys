import React from 'react';
import styled from 'styled-components';
import notFoundImage from '../assets/images/404image.jpg';
import SEO from '../components/SEO';
import { breakpoint } from '../styles/breakpoints';

const PageNotFound = () => (
	<>
		<SEO title='404 Page' />
		<PageNotFoundStyles>
			<div className='container'>
				<h1>Oops… Deze pagina is niet beschikbaar!</h1>
			</div>
		</PageNotFoundStyles>
	</>
);

export default PageNotFound;

const PageNotFoundStyles = styled.div`
	margin-top: 20px;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 90vh;
	background-image: url(${notFoundImage});
	background-size: cover;
	background-position: center top;

	h1 {
		font-size: 50px;
		width: 90%;
	}

	@media ${breakpoint.md} {
		margin-top: 0px;

		h1 {
			font-size: 40px;
		}
	}
`;
