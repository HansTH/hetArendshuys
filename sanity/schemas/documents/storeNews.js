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
      description: 'De titel van het nieuwsbericht.',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      description:
        'Belangrijk! Klik de "Generate" button, om automatisch een naam te genereren.',
      type: 'slug',
      validation: (Rule) => Rule.required().error('Klik de "Generate" button'),
      options: {
        source: 'newsTitle',
        maxLength: 99,
      },
    },
    {
      title: 'Nieuws Text',
      name: 'newsText',
      description:
        'Beschrijf uw nieuwsbericht. Belangrijk! Maximaal 500 characters, zodat alle tekst zichtbaar is.',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .error('Verplicht invullen!')
          .max(500)
          .error('Maximaal 500 characters.'),
    },
    {
      title: 'Nieuws Datum',
      name: 'newsDate',
      description: 'De datum van het nieuwsbericht.',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('Verplicht invullen!'),
    },
    {
      title: 'Nieuws Foto',
      name: 'newsImage',
      description:
        "Verplicht 1 foto toevoegen. Als je met de iPhone foto's maakt, en deze verstuurt naar je mail. Verstuur deze dan met de NORMAAL optie.",
      type: 'image',
      validation: (Rule) =>
        Rule.required().error('Verplicht 1 foto toevoegen.'),
    },
  ],
};
