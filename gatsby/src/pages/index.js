import React, { useState } from 'react';
import { graphql } from 'gatsby';
import BrandLogo from '../components/brand/BrandLogo';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import StoreInfo from '../components/store/StoreInfo';
import StoreNews from '../components/store/StoreNews';

export const data = graphql`
	{
		storeInfo: allSanityWinkel {
			nodes {
				id
				store: winkel {
					slogan
					storeInfo
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

	const bgImg = randomIndex(imageArray);
	function randomIndex(a) {
		return a[Math.floor(Math.random() * a.length)];
	}

	const [bgImage, setBgImage] = useState(bgImg);

	function handleBgImage(bgImage) {
		setBgImage(bgImage);
	}

	return (
		<>
			<Header bgImage={bgImage.asset.fluid} />
			<SectionTitle title={store.storeName} bgColor='var(--light-yellow)'>
				<StoreInfo storeInfo={store} handleBgImage={handleBgImage} />
			</SectionTitle>
			<SectionTitle title='Onze Merken' bgColor='var(--blue)'>
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
