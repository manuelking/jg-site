import React from 'react'
import styles from '@/styles'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={`flex sm:flex-row flex-col ${styles.paddingY} px-24 mt-20`}>

    
    <div className={`flex-1 ${styles.flexStart} flex-col`}>
    <div className='flex absolute flex-row justify-between items-center w-full'>
    <h1 className='flex relative flex-row justify-between items-center w-full flex-1 font-normal text-[64px] text-white -top-24 -mt-14'>
    Spotlight
    </h1>
    </div>
    
    <p className={`font-normal text-white text-left text-[32px] leading-[30.8px] mt-2`}>
    Check out my Spotlight
    </p>
    </div>
    
    <div className='flex flex-row justify-between items-end'>
    <Image src='/img2.svg' alt='img1' width={330} height={495} className='object-contain' />
    </div>
    
    </section>
  )
}



export default Hero