const aboutType = {
  name: 'about',
  title: 'About',
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
    {
      name: 'button_text',
      title: 'button_text',
      type: 'string',
      description: `This will be the text displayed in the button present in this section`,
      validation: (rule) => rule.required(),
    },
  ],
}

export default aboutType