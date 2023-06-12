import React from 'react'
import styles, { layout } from '@/styles'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="flex sm:flex-row gap-y-16 flex-col-reverse py-6 ">
      <div className="relative flex-col flex flex-1 md:justify-end justify-center sm:items-start items-center">
        <Image
          src="/img2.svg"
          alt="img2"
          width={330}
          height={495}
          className="z-0"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center sm:items-end items-center">
        <div className="flex justify-center items-center">
          <h1 className="font-normal sm:text-[64px] text-[54px] leading-[80px] text-white">
            Joe Gater
          </h1>
        </div>

        <div className="flex justify-center pt-[48px]">
          <p className="font-light sm:text-[24px] text-[20px] leading-[29px] ss:text-right text-center text-white">
            Actor / Teacher based in <br className="xs:block hidden" /> London
            and Reading
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

// <Image
//           src="/img1sh.svg"
//           alt="img1shadow"
//           width={543}
//           height={349}
//           className="z-0"
//         />

// <Image
//           src="/img2.svg"
//           alt="img2"
//           width={330}
//           height={495}
//           className="z-10 md:-right-[30px] md:-top-[30px] sm:-right-[-160px] sm:-top-[30px] absolute"
//         />
