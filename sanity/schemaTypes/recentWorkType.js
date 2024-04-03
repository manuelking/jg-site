const recentWorkType = {
  name: 'recentWork',
  title: 'Recent Work',
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
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true },
      //   validation: (rule) => rule.required(),
    },
  ],
}

export default recentWorkType
