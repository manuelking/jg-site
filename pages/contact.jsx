import { ContactMe, FindMe, Footer } from '@/components'
import { fetchContact } from '@/sanity/client'
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'

const contact = () => {
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
    <div className="bg-primary relative w-full overflow-hidden ">
      <NextSeo
        title="Contact - Joe Gater"
        description="Connect with actor and teacher Joe Gater via Spotlight, email, Instagram, Twitter, or YouTube for exciting acting opportunities."
      />

      <div className="bg-primary relative flex justify-center items-center px-10 w-full">
        <div className="max-w-[1229px] z-0 space-y-20">
          {(!isLoading || content) && (
            <>
              <ContactMe data={content} />
              <FindMe heading={heading} />
            </>
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default contact
