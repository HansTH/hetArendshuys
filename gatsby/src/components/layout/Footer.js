import React from 'react';
import styled from 'styled-components';
import HTHmedia from '../../assets/images/icons/HTH-media.svg';
import { breakpoint } from '../../styles/breakpoints';
import StoreContact from '../store/StoreContact';
import SocialLinks from '../nav/SocialLinks';
import StoreHours from '../store/StoreHours';

export default function Footer({ footerInfo }) {
	const currentYear = new Date().getFullYear();
	const [{ winkel }] = footerInfo.nodes;
	const {
		contactInfo,
		storeHours,
		socialMediaData,
		storeName,
		slogan,
	} = winkel;

	return (
		<FooterStyles>
			<div className='container'>
				<div className='footer'>
					<div className='contact'>
						<StoreContact contact={{ contactInfo, storeName, slogan }} />
					</div>
					<div className='social'>
						<SocialLinks links={socialMediaData} />
					</div>
					<div className='store-hours'>
						<StoreHours storeHours={storeHours} />
					</div>
				</div>
				<p className='copyright'>
					<a href='https://www.hansterhorst.com'>www.hansterhorst.com</a>
					<img src={HTHmedia} alt='HTH media logo' />
					<span>{currentYear}</span>
				</p>
			</div>
		</FooterStyles>
	);
}

const FooterStyles = styled.footer`
	background-color: var(--blue);
	padding: 3rem 0;

	.footer {
		display: flex;
		justify-content: space-between;
		margin-bottom: 2rem;

		.social {
			margin: auto;
			width: 20%;
		}
	}
	.copyright {
		color: var(--light-yellow);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		letter-spacing: 1px;

		a {
			color: var(--light-yellow);
			text-decoration: none;
			&:hover,
			:focus {
				color: var(--yellow);
			}
		}

		img {
			width: 25px;
			height: 25px;
			margin: 0 0.5rem;
		}
	}

	@media ${breakpoint.sm} {
		.footer {
			flex-direction: column;
			align-items: center;

			.social {
				margin: 2rem 0;
				width: 50%;
			}
		}
	}
`;
