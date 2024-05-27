import currentProjectType from './schemaTypes/currentProjectType'
import currentWorkType from './schemaTypes/currentWorkType'
import galleySchema from './schemaTypes/galleryType'
import recentWorkType from './schemaTypes/recentWorkType'

export const schema = {
  types: [galleySchema, currentWorkType, currentProjectType, recentWorkType],
}
