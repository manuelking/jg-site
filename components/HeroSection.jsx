import Image from 'next/image'
import React from 'react'
import styles, { layout } from '@/styles'
import Button from './Button'

const HeroSection = () => {
  return (
    <section className='flex flex-row pt-6 pb-16'>
        <div className='flex-1 flex justify-center items-center flex-col'>
            <h2>
                Spotlight
            </h2>
            <p>
                Check out my spotlight
            </p>

            <Button styles={`mt-10`}>
                Spotlight &rarr;
            </Button>
        </div>

        <div className='flex-col relative flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            <Image src='/img2.svg' alt='img2' width={330} height={495} />
        </div>
  </section>
  )
}

export default HeroSection

