import { About, BookHero, Hero, HeroSection, Lessons } from '@/components'
import React from 'react'

const teaching = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden z-0 pb-[177px]">
    
    <div className='bg-primary relative flex justify-center pt-[80px] px-10 w-full'>
      <div className='max-w-[1229px] z-10'>
        <BookHero />
        <Lessons />
      </div>   
      
      
      </div>
      
    </div>
  )
}

export default teaching