import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';
import PortableText from '../PortableText';

export default function StoreInfo({ storeInfo, handleBgImage }) {
  return (
    <StoreInfoStyles>
      <PortableText blocks={storeInfo._rawBody} />
      <div className='images-grid'>
        {storeInfo.smallStoreImg.map((image, index) => (
          <Link
            to='/'
            className='hover-image'
            key={image.asset.id}
            onClick={() => handleBgImage(storeInfo, index)}
            /* ESLint warning: Visible, non-interactive elements with 
							click handlers must have at least one keyboard listener 
						*/
            // onKeyPress={() => handleBgImage(storeInfo, index)}
            // role='button'
            // tabIndex='0'
          >
            <Image fixed={image.asset.fixed} alt='image' />
          </Link>
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

  .hover-image {
    transition: all ease-in-out 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
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
