import Image from 'next/image'
import React from 'react'

const BookHero = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-1 sm:flex-row flex-col-reverse justify-between items-center w-full sm:space-x-[74px] space-x-0 gap-y-16">
        <div className="flex">
          <Image src="./img5.svg" alt="Lesson Image" width={437} height={435} />
        </div>
        <div className="flex-1 max-w-[498px]">
          <h2 className="font-bold ss:text-[64px] text-[44px] ss:leading-[77px] leading-[55px] sm:text-right text-left text-white">
            Book a Lesson with me Today!
          </h2>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center pt-[104px]">
        <p className="max-w-[566px] h-[87] font-light text-[24px] leading-[29px] text-center text-white">
          Since I was 16 I've been teaching a variety of ages from young soon to
          be megastars, to those already in the industry who just want a
          refresher.
        </p>
      </div>
    </section>
  )
}

export default BookHero
