import React from 'react';
import styled from 'styled-components';
import { breakpoint } from '../../styles/breakpoints';

export default function Menubutton({ isSideNavbarOpen, toggleSideNavbar }) {
	return (
		<MenuButtonStyles isOpen={isSideNavbarOpen} onClick={toggleSideNavbar}>
			<div className='menu-line' />
			<div className='menu-line' />
		</MenuButtonStyles>
	);
}

const MenuButtonStyles = styled.button`
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background-color: var(--blue);
	border: 2px solid var(--yellow);
	border-radius: 50%;
	position: fixed;
	top: 0;
	right: 0;
	margin: 1rem;
	z-index: 1000;

	&:hover {
		background-color: var(--light-yellow);

		.menu-line {
			background-color: var(--blue);
		}
	}

	.menu-line {
		width: 20px;
		height: 2px;
		margin: 3px 0;
		background-color: var(--yellow);
		border-radius: 2px;
		transition: transform ease-in-out 0.3s;

		:first-child {
			transform: ${({ isOpen }) => isOpen && `translateY(4px) rotate(45deg)`};
		}

		:last-child {
			transform: ${({ isOpen }) => isOpen && `translateY(-4px) rotate(-45deg)`};
		}
	}

	@media ${breakpoint.sm} {
		display: flex;
	}
`;
