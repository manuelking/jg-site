import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from './env'

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
})

export const getGallery = async () => {
  try {
    const GALLERY_QUERY = `*[_type == "gallery"]{_id, image, "src": image.asset->url, name}|order(_createdAt asc)`
    const gallery = await client.fetch(GALLERY_QUERY)

    return gallery
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchCurrent = async (content) => {
  const type = content === 'work' ? 'current-work' : 'current-project'
  try {
    const CURRENT_WORK_QUERY = `
    *[_type == "current-project"] {
      _id,
      title,
      body,
      "images": images[]{
        ...,
        "url": asset->url
      }
    } | order(_createdAt desc)
    `
    const current = await client.fetch(CURRENT_WORK_QUERY)

    return current[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchRecentWork = async () => {
  try {
    const RECENT_WORK_QUERY = `
    *[_type == "recent-work"] {
        _id,
        title,
        body,
        "images": images[]{
          ...,
          "url": asset->url
        }
    } | order(date desc)
  `
    const recentWork = await client.fetch(RECENT_WORK_QUERY)

    return recentWork
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
