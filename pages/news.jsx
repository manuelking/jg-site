import { Footer, Gallery, Navbar, Projects, Video } from '@/components'
import CurrentWork from '@/components/CurrentWork'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import React from 'react'

// can change image to an array of images if i want to display multiple at a time
//max-w-[900px] w-[900px]

const news = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="News - Joe Gater"
        description="Stay updated on Joe's exciting ventures in filmmaking! Explore his screenplays and collaborations with director Tom Neo on thrilling projects in front and behind the camera. Get the latest news now!"
      />

      <div className="bg-primary relative flex flex-col justify-center items-center pt-[84px] pb-[35px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <h2 className="font-bold ss:text-[64px] text-[60px] leading-[77px] text-white text-left">
            What Joe's Up To
          </h2>
        </div>
      </div>

      {/* Disneyland Paris news section */}
      <CurrentWork />

      <div className="bg-primary relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <Projects />
        </div>
      </div>

      {/* Current project section */}
      <div className="bg-darker relative flex flex-col justify-center items-center pt-[65px] pb-[87px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <div className="flex justify-center items-center sm:flex-row relative flex-col-reverse md:gap-x-0 gap-x-10">
            <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
              <Image src="/img8.svg" alt="img8" width={414} height={304} />
            </div>

            <div className="flex flex-1 flex-col justify-center sm:items-start items-start">
              <div className="flex md:pb-[39px] pb-[19px]">
                <h2 className="font-bold md:text-[36px] text-[32px] leading-[44px] text-white">
                  Writing
                </h2>
              </div>

              <div className="flex max-w-[538px] h-[155]">
                <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white">
                  Joe is currently developing multiple plays and screenplays
                  with a handful of exciting people. His latest play “Hit me
                  with the Truth” was recently performed at The Lion & Unicorn
                  Theatre starring Joe and Brian Elias Jackson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary relative flex flex-col justify-center items-center pt-[66px] pb-[80px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <Video />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default news
