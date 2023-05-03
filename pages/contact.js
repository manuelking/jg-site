import { About, ContactMe, FindMe, Footer, Hero, HeroSection, Navbar } from '@/components'
import Image from 'next/image'
import React from 'react'

const contact = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden ">

    <div className='z-10'>
      <Navbar />
    </div>
    
    <div className='bg-primary relative flex justify-center items-center px-10 w-full'>
      <div className='max-w-[1229px] z-0'>
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