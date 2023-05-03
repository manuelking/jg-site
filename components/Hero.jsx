import React from 'react'
import styles, { layout } from '@/styles'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex md:flex-row gap-y-16 flex-col-reverse py-6 '>

    <div className='relative flex-col flex md:justify-end justify-center md:items-end items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
      <Image src='/img1.svg' alt='img1' width={543} height={349} className='z-10 md:-right-[30px] md:-top-[30px] sm:-right-[-160px] sm:-top-[30px] absolute' />
      <Image src='/img1sh.svg' alt='img1shadow' width={543} height={349} className='z-0' />
    </div>

    <div className='flex-1 flex-col flex justify-center md:items-end items-center'>
      <div className='flex justify-center items-center'>
        <h1 className='font-normal text-[64px] leading-[80px] text-white'>
          Joe Grater
        </h1>
      </div>

      <div className='flex justify-center pt-[48px]'>
        <p className='font-normal text-[24px] leading-[29px] text-right text-white'>
          Actor / Teacher based in <br className='xs:block hidden'/> London and Reading
        </p>
      </div>
    </div>
      
    </section>
  )
}



export default Hero