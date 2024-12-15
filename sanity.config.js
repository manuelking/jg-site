/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\pages\sanity\[[...index]].jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['hero-section'])

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      //*
      // S.listItem().title('Gallery').child(
      //   /* Create a list of all posts */
      //   S.documentList().title('Gallery').filter('_type == "gallery"')
      // ),
      //*

      S.listItem()
        .title('Home')
        .child(
          S.list()
            .title('Home')
            .items([
              S.listItem()
                .title('Hero')
                .id('hero-section')
                .child(
                  S.document()
                    .schemaType('hero-section')
                    .documentId('hero-section')
                ),
              S.listItem()
                .title('Highlight Section')
                .id('highlight-section')
                .child(
                  S.document()
                    .schemaType('highlight-section')
                    .documentId('highlight-section')
                ),
              S.listItem()
                .title('About')
                .id('about')
                .child(S.document().schemaType('about').documentId('about')),
            ])
        ),
      S.listItem()
        .title('News')
        .child(
          S.list()
            .title('News')
            .items([
              S.listItem()
                .title('Current Work')
                .child(
                  S.documentList()
                    .title('Current Work')
                    .filter('_type == "current-work"')
                ),
              S.listItem()
                .title('Current Project')
                .child(
                  S.documentList()
                    .title('Current Project')
                    .filter('_type == "current-project"')
                ),
            ])
        ),
      S.listItem()
        .title('Recent')
        .child(
          S.list()
            .title('Recent')
            .items([
              ...S.documentTypeListItems().filter((listItem) =>
                ['recent-work'].includes(listItem.getId())
              ),
            ])
        ),
      ...S.documentTypeListItems().filter((listItem) =>
        ['gallery'].includes(listItem.getId())
      ),
    ])

// S.listItem()
//   .title('Settings')
//   .child(
//     S.listItem()
//       .title('test')
//       .child(
//         S.document().schemaType('siteSettings').documentId('siteSettings')
//       )
// S.list()
//   .title('Settings Documents')
//   .items([
//     S.listItem()
//       .title('Metadata')
// .child(
//   S.document()
//     .schemaType('siteSettings')
//     .documentId('siteSettings')
//       ),
//     S.listItem()
//       .title('Site Colors')
//       .child(S.document().schemaType('colors').documentId('colors')),
//     S.listItem()
//       .title('Main Navigation')
//       .child(
//         S.document().schemaType('navigation').documentId('navigation')
//       ),
//   ])
// ),

// S.list()
//   .title('Content')
//   .items([
//     // S.documentTypeListItems()
//     S.documentListItem().id('gallery').schemaType('gallery'),
//     // Add a visual divider
//     S.divider(),
//     // Add the rest of the document types, but filter out the siteSettings type defined above
//     ...S.documentTypeListItems().filter(
//       (item) => item.getId() !== 'siteSettings'
//     ),
//   ])

export default defineConfig({
  basePath: '/sanity',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    ...schema,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({
      structure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
