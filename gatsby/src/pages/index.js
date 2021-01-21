import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BrandLogo from '../components/brand/BrandLogo';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import StoreInfo from '../components/store/StoreInfo';
import StoreNews from '../components/store/StoreNews';
import SEO from '../components/SEO';

export const data = graphql`
  {
    storeInfo: allSanityWinkel {
      nodes {
        id
        store: winkel {
          slogan
          body {
            _type
            style
            _key
            list
            children {
              _key
              _type
              marks
              text
            }
          }
          storeName
          smallStoreImg: storeImages {
            asset {
              id
              fixed(width: 250, height: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
          largeStoreImg: storeImages {
            asset {
              id
              fluid(maxWidth: 1200) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    storeNews: allSanityNews(
      sort: { fields: newsDate, order: DESC }
      limit: 2
    ) {
      nodes {
        id
        newsDate
        newsText
        newsTitle
        slug {
          current
        }
        newsImage {
          asset {
            fixed(width: 250, height: 250) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    storeBrands: allSanityBrands {
      nodes {
        id
        brandName
        slug {
          current
        }
      }
    }
  }
`;

export default function Home({ data }) {
  const [{ store }] = data.storeInfo.nodes;
  const imageArray = store.largeStoreImg;

  // pick a random image from the array
  const bgImg = randomIndex(imageArray);

  const [bgImage, setBgImage] = useState(bgImg);

  function randomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // set and show the clicked image in Header component
  function handleBgImage(bgImage, index) {
    setBgImage(bgImage.largeStoreImg[index]);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <SEO image={bgImage?.asset?.fluid?.src} />
      <Header id='home' bgImage={bgImage} />
      <SectionTitle
        title={store.storeName}
        slogan={store.slogan}
        bgColor='var(--light-yellow)'
      >
        <StoreInfo storeInfo={store} handleBgImage={handleBgImage} />
      </SectionTitle>
      <SectionTitle title='Onze Merken' bgColor='var(--blue)' id='merken'>
        <BrandLogo storeBrands={data.storeBrands} />
      </SectionTitle>
      <SectionTitle
        title='Laatste Nieuws'
        bgColor='var(--light-yellow)'
        id='laatste-nieuws'
      >
        <StoreNews storeNews={data.storeNews} disableLink={false} />
      </SectionTitle>
    </>
  );
}
