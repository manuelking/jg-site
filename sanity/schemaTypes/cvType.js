const cvType = {
  name: 'cv',
  title: 'CV',
  type: 'document',
  fields: [
    // {
    //   name: 'title',
    //   title: 'title',
    //   type: 'string',
    // },
    {
      name: 'cvFile',
      title: 'CV File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
    },
  ],
}

export default cvType
