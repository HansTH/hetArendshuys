import { GiPorcelainVase as Vase } from 'react-icons/gi';

export default {
	title: 'Merken',
	name: 'brands',
	icon: Vase,
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
			description:
				'Belangrijk! Klik de "Generate" button, om automatisch een naam te genereren.',
			type: 'slug',
			validation: (Rule) => Rule.required(),
			options: {
				source: 'brandName',
				maxLength: 99,
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
			validation: (Rule) => Rule.max(4).warning("Maximaal 4 foto's."),
		},
	],
};
