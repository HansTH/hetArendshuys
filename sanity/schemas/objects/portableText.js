export default {
  title: 'Body',
  name: 'portableText',
  type: 'array',
  of: [
    {
      name: 'block',
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [],
      },
    },
  ],
  validation: (Rule) => Rule.required(),
};
