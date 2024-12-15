const heroSectionType = {
  name: 'hero-section',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
  ],
}

export default heroSectionType
