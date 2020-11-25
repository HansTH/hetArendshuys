import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// social links icons
import facebookIcon from '../../assets/images/icons/facebook.svg';
import instagramIcon from '../../assets/images/icons/instagram.svg';
import pintrestIcon from '../../assets/images/icons/pintrest.svg';

export default function SocialLinks({ links }) {
	const [facebook, setFacebook] = useState('');
	const [instagram, setInstagram] = useState('');

	useEffect(() => {
		links &&
			links.map((link) => {
				if (link.socialMediaName.toLowerCase() === 'facebook')
					return setFacebook(link.socialMediaUrl);
				if (link.socialMediaName.toLowerCase() === 'instagram')
					return setInstagram(link.socialMediaUrl);
				if (link.socialMediaName.toLowerCase() === 'pinterest')
					return setInstagram(link.socialMediaUrl);
				return null;
			});
	}, [links]);

	return (
		<SocialLinksStyles>
			<div className='social-link'>
				<a href={facebook}>
					<img src={facebookIcon} alt='Facebook logo' />
				</a>
			</div>
			<div className='social-link'>
				<a href={instagram}>
					<img src={instagramIcon} alt='Instagram logo' />
				</a>
			</div>
			<div className='social-link'>
				<a href='/'>
					<img src={pintrestIcon} alt='Pintrest logo' />
				</a>
			</div>
		</SocialLinksStyles>
	);
}

const SocialLinksStyles = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection};
	align-items: center;
	justify-content: space-between;
	img {
		width: 40px;
	}
	img:hover {
		cursor: pointer;
		filter: sepia(11%) saturate(5852%) hue-rotate(354deg) brightness(100%)
			contrast(100%);
	}
`;
