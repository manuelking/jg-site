import React from 'react'
import styles, { layout } from '@/styles'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex md:flex-row flex-col-reverse py-6'>

    <div className='flex-1 flex justify-end items-end md:mr-10 mr-0 md:mt-0 mt-10 relative'>
      <Image src='/img1.svg' alt='img1' width={543} height={349} />
    </div>

    <div className='flex-1 flex-col flex justify-center'>
      <div className='flex justify-center items-center'>
        <h1 className='text-[64px]'>
          Joe Grater
        </h1>
      </div>

      <div className='flex justify-center'>
        <p className='text-[24px]'>
          Actor / Teacher based in <br/> London and Reading
        </p>
      </div>
    </div>
      
    </section>
  )
}



export default Hero