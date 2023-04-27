import { About, Gallery, Hero, HeroSection, Projects, Video } from '@/components'
import React from 'react'

const news = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden z-0 pb-[177px]">
    
      <div className='bg-primary relative flex justify-center items-center pt-[80px] px-10'>
        <div className='max-w-[1029px] w-full z-10'>
          <Projects />
          <Video />
          <Gallery />
        </div>
      </div>
      
    </div>
  )
}

export default news