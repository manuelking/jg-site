import { About, Footer, Gallery, Hero, HeroSection, Navbar, Projects, Video } from '@/components'
import React from 'react'

const news = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden pb-[177px]">
    
      <div className='z-10'>
        <Navbar />
      </div>

      <div className='bg-primary relative flex justify-center items-center pt-[80px] px-10'>
        <div className='max-w-[1029px] w-full z-0'>
          <Projects />
          <Video />
          <Gallery />
        </div>
      </div>

      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default news