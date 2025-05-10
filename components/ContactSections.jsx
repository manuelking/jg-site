import { fetchContact } from '@/sanity/client'
import { useEffect, useState } from 'react'
import ContactMe from './ContactMe'
import FindMe from './FindMe'

export default function ContactSections() {
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const getContent = async () => {
      setIsLoading(true)
      const data = await fetchContact()
      if (data) {
        setContent(data)
        setIsLoading(false)
      }
    }

    getContent()
  }, [])

  const heading = content?.heading

  return (
    (!isLoading || content) && (
      <>
        <ContactMe data={content} />
        <FindMe heading={heading} />
      </>
    )
  )
}
