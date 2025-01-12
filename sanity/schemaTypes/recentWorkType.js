import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

const recentWorkType = {
  name: 'recent-work',
  title: 'Recent Work',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'recent-work' }),
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
