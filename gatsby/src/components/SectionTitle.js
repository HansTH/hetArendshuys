import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../styles/breakpoints';
export default function SectionTitle({ children, title, bgColor }) {
	return (
		<SectionTitleStyles bgColor={bgColor}>
			<div className='container'>
				<h2 className='section-title'>{title}</h2>
				{children}
			</div>
		</SectionTitleStyles>
	);
}

const SectionTitleStyles = styled.section`
	background-color: ${({ bgColor }) => bgColor};
	padding: 3rem 0;

	.section-title {
		color: var(--blue);
		text-align: center;
		text-transform: capitalize;
		padding-bottom: 2rem;
	}

	@media ${breakpoint.sm} {
		.section-title {
			padding-bottom: 0rem;
		}
	}
`;
