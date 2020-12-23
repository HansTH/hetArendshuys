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
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Winkel Slogan',
			name: 'slogan',
			description: 'Korte duidelijke slogan van uw winkel.',
			type: 'string',
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Winkel Adresgegevens',
			name: 'contactInfo',
			type: 'storeContactInfo',
		},
		{
			title: 'Winkel Informatie',
			name: 'storeInfo',
			description:
				'Vertel iets over uw winkel. Belangrijk! Maximaal 700 characters, zodat alle tekst zichtnaar is.',
			type: 'text',
			validation: (Rule) =>
				Rule.required()
					.error('Verplicht invullen!')
					.max(700)
					.error('Maximaal 700 characters.'),
			// validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Winkel Fotos',
			name: 'storeImages',
			description: "Vier foto's van uw winkel.",
			type: 'array',
			of: [{ type: 'image' }],
			// validation: (Rule) => Rule.required().error('Verplicht invullen!'),
			validation: (Rule) => Rule.max(4).error("Maximaal 4 foto's."),
		},
		{
			title: 'Winkel Openingstijden',
			name: 'storeHours',
			type: 'array',
			of: [{ type: 'openHour' }],
			validation: (Rule) =>
				Rule.required()
					.error('Alle dagen van de week invullen.')
					.max(7)
					.error('Er zitten 7 dagen in een week.'),
		},

		{
			title: 'Social Media Links',
			name: 'socialMediaLinks',
			description: 'De links van uw FaceBook, Instagram en Pinterest profiel',
			type: 'array',
			of: [{ type: 'socialMediaLink' }],
			validation: (Rule) => Rule.max(3).error('Maximaal 3 social media links'),
		},
	],
};
