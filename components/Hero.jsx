import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex sm:flex-row gap-y-16 flex-col-reverse py-6 ">
      <div className="relative flex-col flex flex-1 md:justify-end justify-center sm:items-start items-center">
        <Image
          src="/img2.svg"
          alt="Joe Gater Image 2"
          width={330}
          height={495}
          className="z-0 fill"
          priority
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
