import { BsClock as Clock } from 'react-icons/bs';

export default {
  title: 'Openingstijd',
  name: 'openHour',
  icon: Clock,
  type: 'object',
  fields: [
    {
      title: 'Dag',
      name: 'day',
      description: 'Welke dag van de week? (bijv. Maandag, Dinsdag, ...)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Verplicht invullen!'),
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
    {
      title: 'Openingstijd',
      name: 'openingHour',
      description: 'Hoe laat gaat de winkel open? (bijv. 09:00)',
      type: 'string',
    },
    {
      title: 'Sluitingstijd',
      name: 'closeHour',
      description: 'Hoe laat gaat de winkel sluiten? (bijv. 18:00)',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'day',
      openHour: 'openingHour',
      closeHour: 'closeHour',
      closed: 'closed',
    },
    prepare({ title, openHour, closeHour, closed }) {
      return {
        title,
        subtitle: closed ? 'Gesloten' : `${openHour} - ${closeHour}`,
      };
    },
  },
};
