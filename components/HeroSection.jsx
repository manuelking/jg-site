import Image from 'next/image'
import React from 'react'
import styles, { layout } from '@/styles'
import Button from './Button'

const HeroSection = () => {
  return (
    <section className='flex sm:flex-row flex-col pt-20 pb-16'>
        <div className='flex-1 flex justify-between py-10 justify-start sm:items-start items-center flex-col sm:gap-y-0 gap-y-10'>
            <h2 className={`font-normal text-[64px] leading-[88px] text-white`}>
                Spotlight
            </h2>
            <p className='text-normal text-white text-[32px] leading-[40px] sm:text-left text-center'>
                Check out my spotlight
            </p>

            <Button styles={`md:w-[281px] h-[77px] w-[251px]`}>
                Spotlight
            </Button>
        </div>

        <div className='flex-col relative flex-1 flex justify-end sm:items-end items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            <Image src='/img2.svg' alt='img2' width={330} height={495} />
        </div>
  </section>
  )
}

export default HeroSection
