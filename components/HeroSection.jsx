import Image from 'next/image'
import React from 'react'
import styles, { layout } from '@/styles'
import Button from './Button'

const HeroSection = () => {
  return (
    <section className='flex flex-row pt-20 pb-16'>
        <div className='flex-1 flex justify-between py-10 justify-start items-start flex-col'>
            <h2 className={`${styles.heading2}`}>
                Spotlight
            </h2>
            <p className='text-normal text-white text-[32px] leading-[40px]'>
                Check out my spotlight
            </p>

            <Button styles={`mt-10`}>
                Spotlight
            </Button>
        </div>

        <div className='flex-col relative flex-1 flex justify-end items-end md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            <Image src='/img2.svg' alt='img2' width={330} height={495} />
        </div>
  </section>
  )
}

export default HeroSection

