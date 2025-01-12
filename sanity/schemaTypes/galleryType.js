import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

const galleySchema = {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'gallery' }),
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
}

export default galleySchema
