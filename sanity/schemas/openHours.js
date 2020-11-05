export default {
	title: 'Openingstijden',
	name: 'openHours',
	type: 'object',
	fields: [
		{
			title: 'Dag',
			name: 'day',
			description: 'Welke dag van de week? (bijv. Maandag, Dinsdag, ...)',
			type: 'string',
		},
		{
			title: 'Openingstijd',
			name: 'openingHour',
			description: 'Hoelaat gaat de winkel open? (bijv. 09:00)',
			type: 'string',
		},
		{
			title: 'Sluitingstijd',
			name: 'closeHour',
			description: 'Hoelaat gaat de winkel sluiten? (bijv. 18:00)',
			type: 'string',
		},
		{
			title: 'Gesloten',
			name: 'closed',
			description: 'Is de winkel deze dag gesloten?',
			type: 'boolean',
			options: {
				layout: 'checkbox',
			},
		},
	],
};
