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
      description: 'De naam van het merk. Belangrijk! maximaal 3 woorden.',
      type: 'string',
      validation: (Rule) => Rule.required().error('Verplicht invullen!'),
    },
    {
      title: 'Slug',
      name: 'slug',
      description:
        'Belangrijk! Klik de "Generate" button, om automatisch een naam te genereren.',
      type: 'slug',
      validation: (Rule) => Rule.required().error('Klik de "Generate" button'),
      options: {
        source: 'brandName',
        maxLength: 99,
      },
    },
    {
      title: 'Merk Informatie',
      name: 'body',
      description:
        'Belangrijk! Maximaal 700 characters, zodat alle tekst zichtbaar is.',
      type: 'portableText',
      validation: (Rule) =>
        Rule.required()
          .error('Verplicht invullen!')
          .max(700)
          .error('Maximaal 700 characters.'),
    },
    {
      title: 'Fotos',
      name: 'brandImages',
      description:
        "Verplicht 4 foto's toevoegen. Als je met de iPhone foto's maakt, en deze verstuurt naar je mail. Verstuur deze dan met de NORMAAL optie.",
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) =>
        Rule.min(4).max(4).error("Verplicht 4 foto's toevoegen."),
    },
  ],
};
