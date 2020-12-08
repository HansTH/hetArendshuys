export default {
	title: 'Winkel',
	name: 'storeInfo',
	type: 'object',
	fields: [
		{
			title: 'Winkel Naam',
			name: 'storeName',
			description: 'Naam van uw winkel?',
			type: 'string',
		},
		{
			title: 'Winkel Slogan',
			name: 'slogan',
			description: 'Korte duidelijke slogan.',
			type: 'string',
		},
		{
			title: 'Winkel Adresgegevens',
			name: 'contactInfo',
			type: 'storeContactInfo',
		},
		{
			title: 'Winkel Informatie',
			name: 'storeInfo',
			description: 'Vertel iets over uw winkel',
			type: 'text',
			validation: (Rule) => Rule.max(750).warning('Maximaal 700 characters.'),
		},
		{
			title: 'Winkel Fotos',
			name: 'storeImages',
			description: 'Vier fotos van uw winkel.',
			type: 'array',
			of: [{ type: 'image' }],
			validation: (Rule) => Rule.max(4).warning('Maximaal 4 fotos.'),
		},
		{
			title: 'Winkel Openingstijden',
			name: 'storeHours',
			type: 'array',
			of: [{ type: 'openHour' }],
		},

		{
			title: 'Social Media Links',
			name: 'socialMediaLinks',
			description: 'De link van uw social media profiel',
			type: 'array',
			of: [{ type: 'socialMediaLink' }],
		},
	],
};
