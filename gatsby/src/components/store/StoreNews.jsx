import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function StoreNews({ storeNews }) {
	const news = storeNews.nodes;

	return (
		<StoreNewsStyles>
			<div className='container'>
				{news.map((item) => (
					<div key={item.id} className='news'>
						<div className='image'>
							<Image fixed={item.newsImage.asset.fixed} />
						</div>
						<div className='text'>
							<h3>{item.newsTitle}</h3>
							<h5>{new Date(item.newsDate).toLocaleDateString('nl-NL')}</h5>
							<p>{item.newsText}</p>
							{/* <Link className='button' to={`/nieuws/${item.slug.current}`}>
								Lees meer
							</Link> */}
						</div>
					</div>
				))}
			</div>
		</StoreNewsStyles>
	);
}

const StoreNewsStyles = styled.div`
	.news {
		display: flex;
		margin: 3rem 0;
	}

	.text {
		margin-left: 1rem;

		a {
			display: inline-block;
			border: 2px solid var(--yellow);
			border-radius: 4px;
			padding: 0.5rem 0.75rem;
			background-color: var(--yellow);
			color: var(--blue);
			margin: 0.5rem 0;

			&:hover,
			&:focus {
				background-color: var(--light-yellow);
			}
		}
	}

	@media ${breakpoint.sm} {
		.news {
			flex-direction: column;
			align-items: center;
		}

		.text {
			margin-top: 1rem;

			h3 {
				text-align: left;
				margin: 0;
			}
		}
	}

	@media ${breakpoint.xs} {
		.text {
			margin-left: 0;
		}
	}
`;
