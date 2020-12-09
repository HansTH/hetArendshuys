import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../styles/breakpoints';
export default function SectionTitle({ children, title, bgColor, id }) {
	return (
		<SectionTitleStyles bgColor={bgColor} id={id}>
			<div className='container'>
				<h2 className='section-title'>{title}</h2>
				{children}
			</div>
		</SectionTitleStyles>
	);
}

const SectionTitleStyles = styled.section`
	background-color: ${({ bgColor }) => bgColor};

	.section-title {
		color: ${({ bgColor }) =>
			bgColor === 'var(--blue)' ? 'var(--light-yellow)' : 'var(--blue)'};
		text-align: center;
		padding-top: 50px;
		padding-bottom: 1rem;
	}

	@media ${breakpoint.sm} {
		.section-title {
			padding-top: 50px;
			padding-bottom: 0rem;
		}
	}
`;
