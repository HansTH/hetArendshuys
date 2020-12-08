import { BiNews as News } from 'react-icons/bi';

export default {
	title: 'Nieuws',
	name: 'news',
	icon: News,
	type: 'document',
	fields: [
		{
			title: 'Nieuws Titel',
			name: 'newsTitle',
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
				source: 'newsTitle',
				maxLength: 99,
			},
		},
		{
			title: 'Nieuws Text',
			name: 'newsText',
			type: 'text',
		},
		{
			title: 'Nieuws Datum',
			name: 'newsDate',
			type: 'datetime',
		},
		{
			title: 'Nieuws Foto',
			name: 'newsImage',
			type: 'image',
		},
	],
};
