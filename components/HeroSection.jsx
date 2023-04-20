import Image from 'next/image'
import React from 'react'
import styles, { layout } from '@/styles'
import Button from './Button'

const HeroSection = () => {
  return (
    <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-center`}>
            Spotlight
        </h2>
        <h1 className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
            Check out my spotlight
        </h1>

      <Button styles={`mt-10`} text='Spotlight &#160;&#160; &rarr;' />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <Image src='/img2.svg' alt='img2' width={330} height={495} />
    </div>
  </section>
  )
}

export default HeroSection

