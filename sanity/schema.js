import aboutType from './schemaTypes/aboutType'
import currentProjectType from './schemaTypes/currentProjectType'
import currentWorkType from './schemaTypes/currentWorkType'
import galleySchema from './schemaTypes/galleryType'
import heroSectionType from './schemaTypes/heroSectionType'
import highlightSectionType from './schemaTypes/highlightSectionType'
import recentWorkType from './schemaTypes/recentWorkType'

export const schema = {
  types: [
    galleySchema,
    currentWorkType,
    currentProjectType,
    recentWorkType,
    heroSectionType,
    highlightSectionType,
    aboutType,
  ],
}
