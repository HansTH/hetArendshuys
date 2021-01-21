export default {
  title: 'Body',
  name: 'portableText',
  type: 'array',
  of: [
    {
      name: 'block',
      type: 'block',
      styles: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
  ],
  validation: (Rule) => Rule.required(),
};
