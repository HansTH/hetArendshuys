import React, { useState, useEffect, useRef } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Footer from './Footer';
import 'normalize.css';
import Menubutton from '../nav/Menubutton';
import TopNavbar from '../nav/TopNavbar';
import SideNavbar from '../nav/SideNavbar';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';
import { useStaticQuery, graphql } from 'gatsby';

export default function Layout({ children }) {
	const SCROLL_HEIGHT = 300;

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

		if (baseUri.current === 'http://localhost:8000/') {
			setFixedPosition(false);
		} else {
			setFixedPosition(true);
		}
	}, [children]);

	const data = useStaticQuery(graphql`
		{
			footerInfo: allSanityStore {
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
				}
			}
		}
	`);

	return (
		<LayoutStyles>
			<GlobalStyles />
			<TopNavbar hasScrolled={hasScrolled} fixedPostion={fixedPosition} />
			<Menubutton
				isSideNavbarOpen={isSideNavbarOpen}
				toggleSideNavbar={handleToggleSideNavbar}
			/>
			{children}
			<div className='side-navbar'>
				<SideNavbar
					isSideNavbarOpen={isSideNavbarOpen}
					toggleSideNavbar={handleToggleSideNavbar}
				/>
			</div>
			<Footer footerInfo={data.footerInfo} />
		</LayoutStyles>
	);
}

const LayoutStyles = styled.div`
	.side-navbar {
		display: none;
	}

	@media ${breakpoint.sm} {
		.side-navbar {
			display: block;
		}
	}
`;
