import React from 'react'
import styles, { layout } from '@/styles'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <Image src='/img1.svg' alt='img1' width={543} height={349} />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center`}>
        Joe Grater
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-end`}>
        Actor / Teaching based in <br className="sm:block hidden" /> London and Reading 
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">

      </div>
    </div>
  </section>
  )
}



export default Hero