import { Footer } from '@/components'
import ContactSections from '@/components/ContactSections'
import { NextSeo } from 'next-seo'

const contact = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden ">
      <NextSeo
        title="Contact - Joe Gater"
        description="Connect with actor and teacher Joe Gater via Spotlight, email, Instagram, Twitter, or YouTube for exciting acting opportunities."
      />

      <div className="bg-primary relative flex justify-center items-center px-10 w-full">
        <div className="max-w-[1229px] z-0 space-y-20">
          <ContactSections />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default contact
