export default {
	title: 'Winkel',
	name: 'store',
	type: 'document',
	fields: [
		{
			title: 'Winkel Informatie',
			name: 'storeInfo',
			description: 'Vertel iets over de winkel',
			type: 'text',
			validation: (Rule) => Rule.max(750).warning('Maximaal 700 characters.'),
		},
		{
			title: 'Winkel Fotos',
			name: 'storeImages',
			description: 'Vier fotos van de winkel.',
			type: 'array',
			of: [{ type: 'image' }],
			validation: (Rule) => Rule.max(4).warning('Maximaal 4 fotos.'),
		},
		{
			title: 'Winkel Openingstijden',
			name: 'storeHours',
			type: 'array',
			of: [{ type: 'openHours' }],
		},
		{
			title: 'Winkel Adresgegevens',
			name: 'contactInfo',
			type: 'storeContactInfo',
		},
	],
};
