import galleySchema from './galleryType'

const newsPageType = {
  name: 'newsPage',
  title: 'News Page',
  type: 'object',
  fields: [
    {
      type: 'reference',
      name: 'gallery',
      title: 'Gallery',
      to: [{ type: 'document' }],
    },
  ],
}

export default newsPageType
