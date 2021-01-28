import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { breakpoint, size } from '../../styles/breakpoints';

var settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,
  centerMode: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: size.md,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,

        centerMode: true,
        centerPadding: '70px',
      },
    },
    {
      breakpoint: size.sm,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px',
      },
    },
  ],
};

export default function BrandLogo({ storeBrands }) {
  return (
    <BrandLogoStyles>
      <div className='container'>
        <Slider {...settings}>
          {storeBrands.nodes.map((brand, index) => (
            <div key={index} className='brand-card'>
              <Link to={`/merken#${brand.slug.current}`}>
                {/* 
									split the brand name into separate arrays 
									and then map over the arrays.
								*/}
                {brand.brandName.split(' ').map((item, index) => (
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
  padding-bottom: 2rem;

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
    /* box-shadow: 2px 5px 20px 0 rgba(1, 50, 95, 0.3); */
    box-shadow: 2px 4px 15px 0px rgba(255, 167, 0, 0.4);
    transition: all ease-in-out 0.3s;
    height: 150px;

    a {
      padding: 2rem 3rem;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }

    h2 {
      padding: 0;
      color: var(--blue);
      font-weight: 500;
    }
  }

  .slick-dots li button:before {
    color: var(--light-yellow) !important;
  }

  @media ${breakpoint.md} {
    .brand-card {
      width: 190px !important;
      height: 140px;
    }
  }
`;
