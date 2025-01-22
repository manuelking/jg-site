import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

const currentWorkType = {
  name: 'current-work',
  title: 'Current Work',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'current-work' }),
    {
      name: 'title',
      title: 'title',
      description: `This will be displayed as the heading, for the work, on the website`,
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
      description: `These will be displayed as the imges associated with the work on the website.`,
      of: [{ type: 'image' }],
      options: { hotspot: true },
      //   validation: (rule) => rule.required(),
    },
  ],
}

export default currentWorkType
