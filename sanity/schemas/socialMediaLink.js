export default {
	title: 'Social Media Link',
	name: 'socialMediaLink',
	type: 'object',
	fields: [
		{
			title: 'Social Media Naam',
			name: 'socialMediaName',
			description:
				'De naam van het social media platform (bijv> FaceBool, ...).',
			type: 'string',
		},
		{
			title: 'Social Media Link',
			name: 'socialMediaUrl',
			description:
				'De URL van uw social media profile (bijv. https://www.facebook.com/...).',
			type: 'url',
		},
	],
};
