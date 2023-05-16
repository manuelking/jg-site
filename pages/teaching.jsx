import { About, BookHero, Footer, Hero, HeroSection, Lessons, Navbar } from '@/components'
import React from 'react'

const teaching = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden">

    <div className='z-10'>
      <Navbar />
    </div>
    
      <div className='bg-primary relative flex justify-center pt-[80px] px-10'>
        <div className='max-w-[1029px] w-full z-0'>
          <BookHero />
          <Lessons />
        </div>
      </div>

      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default teaching