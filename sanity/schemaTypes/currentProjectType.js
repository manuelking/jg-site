const currentProjectType = {
  name: 'current-project',
  title: 'Current Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      description: `This will be displayed as the heading, for the project, on the website`,
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      description: `This will be displayed as the description on the website.`,
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      description: `These will be displayed as the imges associated with the project on the website.`,
      of: [{ type: 'image' }],
      options: { hotspot: true },
      //   validation: (rule) => rule.required(),
    },
  ],
}

export default currentProjectType
