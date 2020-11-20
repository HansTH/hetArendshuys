import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import BrandCard from './BrandCard';
import { breakpoint } from '../../styles/breakpoints';

export default function BrandsList({ data }) {
	const storeInfo = data.storeInfo.nodes[0];
	const brandList = data.brands.nodes;
	return (
		<BrandStyles>
			<div className='store-container'>
				<div className='container'>
					<div className=' store-image-right'>
						<div className='store-info'>
							<p>{storeInfo.storeInfo}</p>
						</div>
						<div className='store-images'>
							{storeInfo.storeImages.map((image, index) => (
								<Image key={index} fixed={image.asset.fixed} alt='store' />
							))}
						</div>
					</div>
				</div>
			</div>
			{brandList.map((brand, index) => (
				<BrandCard key={brand.id} brand={brand} index={index} />
			))}
		</BrandStyles>
	);
}

const BrandStyles = styled.div`
	.store-container {
		background-color: var(--light-yellow);
	}

	.store-image-right {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		padding-bottom: 3rem;
	}

	.store-images {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		margin-left: 1rem;
	}

	@media ${breakpoint.md} {
		.store-container {
			/* display: flex; */
			flex-direction: column;
		}

		.store-image-right {
			display: flex;
			flex-direction: column;
		}

		.store-info {
			width: 100%;
			padding: 1rem 0;
		}
	}

	@media ${breakpoint.sm} {
		.store-image-right {
			padding: 0;
			padding-bottom: 1rem;
		}
		.store-images {
			margin-left: 0;
		}

		.gatsby-image-wrapper {
			width: 190px !important;
			height: 190px !important;
		}
	}

	@media ${breakpoint.xs} {
		.store-image-right {
			padding: 0;
			padding-bottom: 1rem;
		}
		.store-images {
			margin-left: 0;
		}

		.gatsby-image-wrapper {
			width: 140px !important;
			height: 140px !important;
		}
	}
`;
