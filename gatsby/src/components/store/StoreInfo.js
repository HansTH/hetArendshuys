import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function StoreInfo({ storeInfo }) {
	return (
		<StoreInfoStyles>
			<p>{storeInfo.storeInfo}</p>
			<div className='images-grid'>
				{storeInfo.smallStoreImg.map((image) => (
					<Image key={image.asset.id} fixed={image.asset.fixed} alt='image' />
				))}
			</div>
		</StoreInfoStyles>
	);
}

const StoreInfoStyles = styled.div`
	.images-grid {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: 2rem 0;
	}

	.gatsby-image-wrapper {
		margin: 0.5rem;
	}

	@media ${breakpoint.sm} {
		p {
			margin-top: 1rem;
		}

		.gatsby-image-wrapper {
			width: 200px !important;
			height: 200px !important;
		}
	}

	@media ${breakpoint.xs} {
		.gatsby-image-wrapper {
			width: 130px !important;
			height: 130px !important;
		}
	}
`;
