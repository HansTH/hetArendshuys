import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function StoreNews({ storeNews, disableLink }) {
	const news = storeNews.nodes;

	return (
		<StoreNewsStyles disableLink={disableLink}>
			<div className='container'>
				{news.map((item) => (
					<div key={item.id} className='news' id={item.slug.current}>
						<div className='image'>
							<Image fixed={item.newsImage.asset.fixed} />
						</div>
						<div className='text'>
							<h3>{item.newsTitle}</h3>
							<h5>{new Date(item.newsDate).toLocaleDateString('nl-NL')}</h5>
							<p>{item.newsText}</p>
							{!disableLink ? (
								<Link className='button' to={`/nieuws/#${item.slug.current}`}>
									Lees meer
								</Link>
							) : (
								<Link className='button' to={`/#laatste-nieuws`}>
									Ga Terug
								</Link>
							)}
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
		padding-top: ${({ disableLink }) => (disableLink ? '100px' : '2rem')};
		&:last-child {
			padding-bottom: 3rem;
		}
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
			padding-top: 50px;
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
