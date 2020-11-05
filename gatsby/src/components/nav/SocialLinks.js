import React from 'react';
import { Link } from 'gatsby';
import facebook from '../../assets/images/icons/facebook.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import pintrest from '../../assets/images/icons/pintrest.svg';
import styled from 'styled-components';

export default function SocialLinks({ flexDirection }) {
	return (
		<SocialLinksStyles>
			<div className='social-link'>
				<Link to='/'>
					<img src={facebook} alt='Facebook logo' />
				</Link>
			</div>
			<div className='social-link'>
				<Link to='/'>
					<img src={instagram} alt='Instagram logo' />
				</Link>
			</div>
			<div className='social-link'>
				<Link to='/'>
					<img src={pintrest} alt='Pintrest logo' />
				</Link>
			</div>
		</SocialLinksStyles>
	);
}

const SocialLinksStyles = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	align-items: center;
	justify-content: space-between;

	img:hover {
		cursor: pointer;
		filter: sepia(11%) saturate(5852%) hue-rotate(354deg) brightness(100%)
			contrast(100%);
	}
`;
