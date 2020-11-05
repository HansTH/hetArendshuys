import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { size } from '../../styles/breakpoints';

var settings = {
	dots: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	infinite: true,
	responsive: [
		{
			breakpoint: size.md,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: size.sm,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

export default function BrandLogo({ storeBrands }) {
	const brand = storeBrands.nodes.map((brand) => brand.brandName.split(' '));

	return (
		<BrandLogoStyles>
			<div className='container'>
				<Slider {...settings}>
					{brand.map((name, index) => (
						<div key={index} className='brand-card'>
							<Link to='/merken'>
								{name.map((item, index) => (
									<h2 key={index}>{item}</h2>
								))}
							</Link>
						</div>
					))}
				</Slider>
			</div>
		</BrandLogoStyles>
	);
}

const BrandLogoStyles = styled.div`
	.brand-card {
		display: flex !important;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 250px !important;
		margin: 2rem auto;
		background-color: var(--white);
		border: 3px solid var(--yellow);
		border-radius: 10px;
		box-shadow: 2px 5px 20px 0 rgba(1, 50, 95, 0.3);
		transition: all ease-in-out 0.3s;
		height: 150px;

		&:hover,
		&:focus {
			transform: scale(1.05);
		}

		h2 {
			padding: 0;
			color: var(--blue);
		}
	}
`;
