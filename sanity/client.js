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
    const GALLERY_QUERY = `*[_type == "gallery"]|order(orderRank) {_id, image, "src": image.asset->url, name}|order(_createdAt asc)`
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
    const CURRENT_QUERY = `
    *[_type == "${type}"]|order(orderRank) {
      _id,
      title,
      body,
      "images": images[]{
        ...,
        "url": asset->url
      }
    } | order(_createdAt desc)
    `
    const current = await client.fetch(CURRENT_QUERY)

    return type === 'current-work' ? current : current[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchRecentWork = async () => {
  try {
    const RECENT_WORK_QUERY = `
    *[_type == "recent-work"]|order(orderRank) {
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

export const fetchHero = async () => {
  try {
    const HERO_QUERY = `
    *[_type == "hero-section"] {
        _id,
        title,
        body,
        image, "src": image.asset->url
    } | order(date desc)
  `
    const data = await client.fetch(HERO_QUERY)

    return data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchHighlightSection = async () => {
  try {
    const HIGHLIGHT_SECTION_QUERY = `
    *[_type == "highlight-section"] {
        _id,
        title,
        body,
        image, 
        "src": image.asset->url,
        button_text,
    } | order(date desc)
  `
    const data = await client.fetch(HIGHLIGHT_SECTION_QUERY)

    return data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchAbout = async () => {
  try {
    const ABOUT_QUERY = `
    *[_type == "about"] {
        _id,
        title,
        body,
        image, 
        "src": image.asset->url,
        button_text,
    } | order(date desc)
  `
    const data = await client.fetch(ABOUT_QUERY)

    return data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchCV = async (type) => {
  const cv = type === 'acting' ? 'acting-cv' : 'teaching-cv'
  try {
    const CV_QUERY = `
      *[_type == "cv" && _id == "${cv}"] {
        _id,
        "fileUrl": cvFile.asset->url
      } | order(_createdAt desc)
    `
    const data = await client.fetch(CV_QUERY)

    return data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchContactItems = async () => {
  try {
    const CONTACT_ITEMS_QUERY = `*[_type == "contact-items"] | order(orderRank) {_id, title, link, type} | order(_createdAt asc)`
    const data = await client.fetch(CONTACT_ITEMS_QUERY)

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchFooterContactItems = async () => {
  try {
    const CONTACT_ITEMS_QUERY = `*[_type == "contact-items" && show_in_footer == true] | order(orderRank) {_id, title, link, type} | order(_createdAt asc)`
    const data = await client.fetch(CONTACT_ITEMS_QUERY)

    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

export const fetchContact = async () => {
  try {
    const CONTACT_QUERY = `
    *[_type == "contact"] {
        _id,
        title,
        body,
         image {
          asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        }, 
        "src": image.asset->url,
        heading,
    } | order(date desc)
  `
    const data = await client.fetch(CONTACT_QUERY)

    return data[0]
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
