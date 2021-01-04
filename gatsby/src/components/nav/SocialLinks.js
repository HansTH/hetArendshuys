import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// social links icons
import FacebookIcon from '../socialLinkIcons/FacebooIcon';
import InstagramIcon from '../socialLinkIcons/InstagramIcon';
import PinterestIcon from '../socialLinkIcons/Pinterest';

export default function SocialLinks({ links }) {
	const [facebook, setFacebook] = useState('');
	const [instagram, setInstagram] = useState('');
	const [pinterest, setPinterest] = useState('');

	useEffect(() => {
		links &&
			links.map((link) => {
				if (link.socialMediaName.toLowerCase() === 'facebook')
					return setFacebook(link.socialMediaUrl);
				if (link.socialMediaName.toLowerCase() === 'instagram')
					return setInstagram(link.socialMediaUrl);
				if (link.socialMediaName.toLowerCase() === 'pinterest')
					return setPinterest(link.socialMediaUrl);
				return null;
			});
	}, [links]);

	return (
		<SocialLinksStyles>
			<div className='social-link'>
				<a href={facebook}>
					<FacebookIcon />
				</a>
			</div>
			<div className='social-link'>
				<a href={instagram}>
					<InstagramIcon />
				</a>
			</div>
			<div className='social-link'>
				<a href={pinterest}>
					<PinterestIcon />
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
`;
