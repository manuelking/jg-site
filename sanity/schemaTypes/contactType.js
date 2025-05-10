const contactType = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heading',
      title: 'heading',
      type: 'string',
      description: `This is the heading above the list of links.`,
    },
  ],
}

export default contactType
