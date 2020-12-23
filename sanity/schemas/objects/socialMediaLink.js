import { BiLinkAlt as Link } from 'react-icons/bi';
import {
	FaFacebookSquare as FaceBook,
	FaInstagram as Instagram,
	FaPinterestSquare as Pinterest,
} from 'react-icons/fa';

export default {
	title: 'Social Media Link',
	name: 'socialMediaLink',
	type: 'object',
	fields: [
		{
			title: 'Social Media Naam',
			name: 'socialMediaName',
			description:
				'De naam van het social media platform (bijv. FaceBook, ...).',
			type: 'string',
		},
		{
			title: 'Social Media Link',
			name: 'socialMediaUrl',
			description:
				'De URL link van uw social media profile (bijv. https://www.facebook.com/...).',
			type: 'url',
		},
	],
	preview: {
		select: {
			title: 'socialMediaName',
			url: 'socialMediaUrl',
		},
		prepare({ title, url }) {
			let icon = Link;
			if (title === 'FaceBook') {
				icon = FaceBook;
			}
			if (title === 'Instagram') {
				icon = Instagram;
			}
			if (title === 'Pinterest') {
				icon = Pinterest;
			}

			return {
				title,
				subtitle: url,
				media: icon,
			};
		},
	},
};
