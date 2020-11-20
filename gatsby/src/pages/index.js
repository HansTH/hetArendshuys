import { graphql } from 'gatsby';
import React from 'react';
import BrandLogo from '../components/brand/BrandLogo';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import StoreInfo from '../components/store/StoreInfo';
import StoreNews from '../components/store/StoreNews';

export const data = graphql`
	{
		storeInfo: allSanityStore {
			nodes {
				id
				storeInfo
				storeImages {
					asset {
						id
						fixed(width: 250, height: 250) {
							...GatsbySanityImageFixed
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
	return (
		<>
			<Header />
			<SectionTitle title='het Arendshuys' bgColor='var(--light-yellow)'>
				<StoreInfo data={data} />
			</SectionTitle>
			<SectionTitle title='Onze Merken' bgColor='var(--blue)'>
				<BrandLogo storeBrands={data.storeBrands} />
			</SectionTitle>
			<SectionTitle title='Laatste Nieuws' bgColor='var(--light-yellow)'>
				<StoreNews storeNews={data.storeNews} />
			</SectionTitle>
		</>
	);
}
