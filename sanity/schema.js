import aboutType from './schemaTypes/aboutType'
import contactType from './schemaTypes/contactType'
import currentProjectType from './schemaTypes/currentProjectType'
import currentWorkType from './schemaTypes/currentWorkType'
import cvType from './schemaTypes/cvType'
import galleySchema from './schemaTypes/galleryType'
import heroSectionType from './schemaTypes/heroSectionType'
import highlightSectionType from './schemaTypes/highlightSectionType'
import recentWorkType from './schemaTypes/recentWorkType'
import ContactItemType from './schemaTypes/contactItemType'

export const schema = {
  types: [
    galleySchema,
    currentWorkType,
    currentProjectType,
    recentWorkType,
    heroSectionType,
    highlightSectionType,
    aboutType,
    cvType,
    ContactItemType,
    contactType,
  ],
}
