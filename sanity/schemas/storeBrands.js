export default {
	title: 'Merken',
	name: 'brands',
	type: 'document',
	fields: [
		{
			title: 'Merk Naam',
			name: 'brandName',
			type: 'string',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'brandName',
				maxLength: 100,
			},
		},
		{
			title: 'Merk Informatie',
			name: 'brandInfo',
			type: 'text',
		},
		{
			title: 'Fotos',
			name: 'brandImages',
			type: 'array',
			of: [{ type: 'image' }],
			validation: (Rule) => Rule.max(4).warning('Maximaal 4 fotos.'),
		},
	],
};
