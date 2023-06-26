import { ContactMe, FindMe, Footer, Navbar } from '@/components'
import { NextSeo } from 'next-seo'
import React from 'react'

const contact = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden ">
      <NextSeo
        title="Contact - Joe Gater"
        description="Connect with actor and teacher Joe Gater via Spotlight, email, Instagram, Twitter, or YouTube for exciting acting opportunities."
      />
      <div className="z-10 px-10">
        <Navbar />
      </div>

      <div className="bg-primary relative flex justify-center items-center px-10 w-full">
        <div className="max-w-[1229px] z-0">
          <ContactMe />
          <FindMe />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default contact
