import React from 'react';

import styled from 'styled-components';
import BrandCard from './BrandCard';
import BrandTag from './BrandTag';
import { breakpoint } from '../../styles/breakpoints';
import PortableText from '../PortableText';

export default function BrandsList({ data }) {
  const [storeInfo] = data.storeInfo.nodes;
  const { _rawBody } = storeInfo.winkel;
  const brandList = data.brands.nodes;

  return (
    <BrandStyles>
      <div className='container'>
        <div className=' brand-tags-container'>
          <div className='brand-tags'>
            {brandList.map((brand) => (
              <BrandTag key={brand.id} brand={brand} />
            ))}
          </div>
          <div className='brand-info'>
            <PortableText blocks={_rawBody} />
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
  background-color: var(--light-yellow);

  .brand-tags {
    text-align: center;
  }

  .brand-tags-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    padding-bottom: 3rem;
  }

  @media ${breakpoint.md} {
    .brand-container {
      flex-direction: column;
    }

    .brand-tags {
      padding-top: 1rem;
    }

    .brand-tags-container {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  @media ${breakpoint.sm} {
    .brand-tags-container {
      padding: 0;
      padding-bottom: 1rem;
    }

    .gatsby-image-wrapper {
      width: 190px !important;
      height: 190px !important;
    }
  }

  @media ${breakpoint.xs} {
    .gatsby-image-wrapper {
      width: 120px !important;
      height: 120px !important;
    }
  }
`;
