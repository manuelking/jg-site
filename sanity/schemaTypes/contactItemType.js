import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

const ContactItemType = {
  name: 'contact-items',
  title: 'Contact Items',
  orderings: [orderRankOrdering],
  type: 'document',
  fields: [
    orderRankField({ type: 'contact-items' }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Email', value: 'email' },
          { title: 'Youtube', value: 'youtube' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'Spotlight', value: 'spotlight' },
        ],
        layout: 'dropdown',
      },
    },
  ],
}

export default ContactItemType
