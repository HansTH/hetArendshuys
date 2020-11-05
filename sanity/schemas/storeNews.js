export default {
  title: 'Nieuws',
  name: 'news',
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
      type: 'slug',
      options: {
        source: 'newsTitle',
        maxLength: 100,
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
}
