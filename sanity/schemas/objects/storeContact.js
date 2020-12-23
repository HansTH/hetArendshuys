export default {
	title: 'Adresgegevens',
	name: 'storeContactInfo',
	type: 'object',
	fields: [
		{
			title: 'Adres',
			name: 'address',
			description: 'Straatnaam en nummer van uw winkel.',
			type: 'string',
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Postcode',
			name: 'zipcode',
			description: 'Postcode van uw winkel.',
			type: 'string',
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Woonplaats',
			name: 'city',
			description: 'Woonplaats van uw winkel.',
			type: 'string',
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Telefoonnummer',
			name: 'telefoonNumber',
			description: 'Telefoonnummer van uw winkel.',
			type: 'string',
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
		{
			title: 'Email',
			name: 'email',
			description: 'Email adres van uw winkel.',
			type: 'string',
			validation: (Rule) => Rule.required().error('Verplicht invullen!'),
		},
	],
};
