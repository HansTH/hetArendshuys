import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function StoreInfo({ data }) {
	const { storeInfo, storeImages } = data.storeInfo.nodes[0];

	return (
		<StoreInfoStyles>
			<p>{storeInfo}</p>
			<div className='images-grid'>
				{storeImages.map((image) => (
					<Image key={image.asset.id} fixed={image.asset.fixed} alt='image' />
				))}
			</div>
		</StoreInfoStyles>
	);
}

const StoreInfoStyles = styled.div`
	.images-grid {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin: 2rem 0;
	}

	@media ${breakpoint.sm} {
		p {
			margin-top: 1rem;
		}
	}
`;
