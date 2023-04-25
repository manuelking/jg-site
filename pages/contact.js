import { About, ContactMe, FindMe, Hero, HeroSection } from '@/components'
import Image from 'next/image'
import React from 'react'

const contact = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden z-0">
    
    <div className='bg-primary relative flex justify-center items-center px-10 w-full'>
      <div className='max-w-[1229px] z-10'>
        <ContactMe />
        <FindMe />
        <Hero />
        <HeroSection />
        <About />
      </div>   
      
      
      </div>
      
    </div>
  )
}

export default contact