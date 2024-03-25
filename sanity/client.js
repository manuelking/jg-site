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

const fetchCurrentWork = async () => {
  try {
    const CURRENT_WORK_QUERY = `
      *[_type == "currentWork"] {
          _id,
          title,
          body,
          "images": images[]{
            ...,
            "url": asset->url
          }
      } | order(date desc)
    `
    const gallery = await client.fetch(CURRENT_WORK_QUERY)

    return gallery
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

const fetchPrevious = async () => {
  try {
    const PREVIOUS_WORK_QUERY = `
    *[_type == "previousWork"] {
        _id,
        title,
        body,
        "images": images[]{
          ...,
          "url": asset->url
        }
    } | order(date desc)
  `
    const gallery = await client.fetch(GALLERY_QUERY)

    return gallery
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
