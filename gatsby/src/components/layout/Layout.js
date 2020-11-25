import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../../styles/GlobalStyles';
import 'normalize.css';
import Footer from './Footer';
import Menubutton from '../nav/Menubutton';
import TopNavbar from '../nav/TopNavbar';
import SideNavbar from '../nav/SideNavbar';
import { breakpoint } from '../../styles/breakpoints';

export default function Layout({ children }) {
	const SCROLL_HEIGHT = 200;

	const SCROLL_TOP = useRef();
	const baseUri = useRef();

	const [hasScrolled, setHasScrolled] = useState(false);
	const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);
	const [fixedPosition, setFixedPosition] = useState(false);

	const handleScroll = (e) => {
		const scrollTop = e.target.scrollingElement.scrollTop;
		if (scrollTop > SCROLL_HEIGHT) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	};

	const handleToggleSideNavbar = () => {
		setIsSideNavbarOpen((prevState) => !prevState);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		SCROLL_TOP.current = document.scrollingElement.scrollTop;
		if (SCROLL_TOP.current > SCROLL_HEIGHT) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	}, []);

	useEffect(() => {
		baseUri.current = document.baseURI;

		if (
			baseUri.current === 'https://dreamy-keller-d31d1e.netlify.app/' ||
			baseUri.current === 'http://localhost:8000/'
		) {
			setFixedPosition(false);
		} else {
			setFixedPosition(true);
		}
	}, [children]);

	const data = useStaticQuery(graphql`
		{
			storeData: allSanityStore {
				nodes {
					storeHours {
						openingHour
						day
						closed
						closeHour
					}
					contactInfo {
						zipcode
						telefoonNumber
						storeName
						slogan
						email
						city
						address
					}
					socialMediaData: socialMediaLinks {
						socialMediaUrl
						socialMediaName
					}
				}
			}
		}
	`);

	return (
		<LayoutStyles fixedPosition={fixedPosition}>
			<GlobalStyles />
			<TopNavbar
				hasScrolled={hasScrolled}
				fixedPostion={fixedPosition}
				socialLinks={data.storeData.nodes[0].socialMediaData}
			/>
			<Menubutton
				isSideNavbarOpen={isSideNavbarOpen}
				toggleSideNavbar={handleToggleSideNavbar}
			/>
			{children}
			<div className='side-navbar'>
				<SideNavbar
					isSideNavbarOpen={isSideNavbarOpen}
					toggleSideNavbar={handleToggleSideNavbar}
					hasScrolled={hasScrolled}
					socialLinks={data.storeData.nodes[0].socialMediaData}
				/>
			</div>
			<Footer footerInfo={data.storeData} />
		</LayoutStyles>
	);
}

const LayoutStyles = styled.div`
	.side-navbar {
		display: ${({ fixedPosition }) => (fixedPosition ? 'none' : 'block')};
	}

	@media ${breakpoint.sm} {
		.side-navbar {
			display: block;
		}
	}
`;
