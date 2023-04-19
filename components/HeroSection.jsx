import Image from 'next/image'
import React from 'react'
import styles from '@/styles'

const HeroSection = () => {
  return (
    <section className={`flex sm:flex-row flex-col ${styles.paddingY} px-24`}>

    <div className='flex-1 flex-row justify-between items-end'>
    <Image src='/img1.svg' alt='img1' width={543} height={349} className='object-contain' />
    </div>
    
    <div className={`flex text-left flex-col`}>
    <div className='flex flex-row justify-between items-center w-full mt-10'>
    <h1 className='flex font-normal text-[64px] text-white'>
    Joe Grater
    </h1>
    </div>
    
    <p className={`${styles.paragraph} text-left mt-6`}>
    Actor / Teacher based in London and Reading
    </p>
    </div>
    
    
    </section>
    
  )
}

export default HeroSection