import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function BrandTag({ brand }) {
	return (
		<BrandTagStyles className='brand-tag'>
			<Link to={`#${brand.slug.current}`}>
				<p>{brand.brandName}</p>
			</Link>
		</BrandTagStyles>
	);
}

const BrandTagStyles = styled.div`
	padding: 0.5rem 0.75rem;
	background-color: var(--white);
	margin: 0.5rem;
	display: inline-flex;
	flex-wrap: wrap;
	justify-content: space-between;
	border: 2px solid var(--yellow);
	border-radius: 25px;
	text-align: center;
	P {
		color: var(--blue);
	}
	&:hover {
		background-color: var(--yellow);
	}
`;
