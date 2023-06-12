import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const About = () => {
  return (
    <div className="flex sm:flex-row relative flex-col-reverse pt-20 pb-14 items-center sm:gapy-y-0 gap-y-16">
      <hr className="border-white absolute top-5 border-[1px] w-full max-w-[1029px]" />

      <div className="flex-1 flex sm:justify-start sm:items-start justify-center items-center relative">
        <Image src="/img4.svg" alt="img4" width={328} height={493} />
      </div>

      <div className="flex flex-1 flex-col flex justify-between">
        <div className="flex sm:justify-start justify-center sm:items-start items-center">
          <h1 className="font-normal md:text-[64px] text-[54px] leading-[80px] text-white sm:text-left text-center">
            About Joe Gater
          </h1>
        </div>

        <div className="flex-1 flex md:w-[646px] max-w-[646px] sm:justify-start justify-center sm:items-start items-center pt-[64px] pb-[54px]">
          <p className="font-light md:text-[24px] text-[20px] leading-[30px] text-white sm:text-left text-center">
            Since he was young, Joe has been creating little videos and skits
            for him to act in, and has excelled in the dramatics. Currently in
            his finial year at the prestigious Italia Conti, he plans to
            continue creating out in the industry and enjoy everything that
            comes his way.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/contact">
            <Button styles={`md:w-[281px] h-[77px] w-[251px]`}>
              Reach Out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
