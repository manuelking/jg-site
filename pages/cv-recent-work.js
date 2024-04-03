import { Footer, Navbar } from '@/components'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const recentWork = [
  {
    title: 'LapLandUK 2023',
    desc: 'Joe is officially a Lapland folk, and delighted to announce that he will be spending the Christmas season at LapLandUK. Him and his new friend Conker hope to get up to lots of mischief together!',
    images: [
      {
        src: '/lluk-11.jpg',
        alt: 'LaplandUK',
        w: 400,
        h: 533,
      },
      {
        src: '/jg-galimg9.jpeg',
        alt: 'LaplandUK',
        w: 220,
        h: 533,
      },
    ],
  },
]

//max-w-[900px] w-[900px]

const cvRecentWork = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="News - Joe Gater"
        description="Stay updated on Joe's exciting ventures in filmmaking! Explore his screenplays and collaborations with director Tom Neo on thrilling projects in front and behind the camera. Get the latest news now!"
      />
      <div className="z-10 px-10">
        <Navbar />
      </div>

      <div className="bg-primary relative flex flex-col justify-center items-center pt-[84px] pb-[35px] px-10">
        <div className="max-w-[1029px] w-full z-0 flex flex-col gap-6">
          <h2 className="font-bold ss:text-[64px] text-[60px] leading-[77px] text-white text-left">
            My CVs
          </h2>
          <p className="font-light sm:text-[24px] text-[20px] leading-[29px] text-white">
            Want to know more? Download my CVs
          </p>
        </div>
      </div>
      <div className="bg-primary relative flex flex-col justify-center items-center pb-[35px] px-10">
        <div className="max-w-[1029px] w-full z-0 flex flex-row flex-wrap gap-6">
          <Link href="/jg-actingcv.pdf" passHref legacyBehavior>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              download="joegater-teachingcv"
  ></a>*/}
            <a target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className={`flex flex-row items-center justify-between py-4 px-6 border-[1px] border-solid bg-tertiary rounded-[30px] text-white font-normal h-[77px] w-[210px] ss:w-[251px] md:w-[281px] shadow-md shadow-tertiary`}
              >
                <div className="flex flex-[1.5] items-center justify-center text-[24px] leading-[30px] font-light text-white">
                  Acting CV
                </div>
              </button>
            </a>
          </Link>
          <Link href="/jg-teachingcv.pdf" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className={`flex flex-row items-center justify-between py-4 px-6 border-[1px] border-solid bg-tertiary rounded-[30px] text-white font-normal h-[77px] w-[210px] ss:w-[251px] md:w-[281px] shadow-md shadow-tertiary`}
              >
                <div className="flex flex-[1.5] items-center justify-center text-[24px] leading-[30px] font-light text-white">
                  Teaching CV
                </div>
              </button>
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-darker relative flex flex-col justify-center items-center pt-[84px] pb-[35px] px-10">
        <div className="max-w-[1029px] w-full z-0 flex flex-col gap-6">
          <h2 className="font-bold ss:text-[64px] text-[60px] leading-[77px] text-white text-left">
            Recent Work
          </h2>
          <p className="font-light sm:text-[24px] text-[20px] leading-[29px] text-white">
            Take a look back at all the work Joe has done
          </p>
        </div>
      </div>

      <div className="bg-darker relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          {recentWork.map(({ title, desc, images }, index) => (
            <div key={title + index} className="flex flex-col">
              <div className="flex-1 flex-col flex justify-center items-start">
                <div className="flex justify-center">
                  <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
                    {title}
                  </h2>
                </div>

                <div className="flex justify-center pt-[39px] pb-[56px]">
                  <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
                    {desc}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-wrap sm:flex-row flex-col gap-y-10 gap-x-16 sm:items-start items-center">
                {images.map(({ src, alt, w, h }, index) => (
                  <Image
                    key={src + index}
                    src={src}
                    alt={alt}
                    width={w}
                    height={h}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* old previous projects section design */}
      {/*<div className="bg-darker relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex-1 flex-col flex justify-center items-start">
                <div className="flex justify-center">
                  <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
                    Recent Work
                  </h2>
                </div>

                <div className="flex justify-center pt-[39px] pb-[56px]">
                  <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
                    Take a look back at all the things Joe has done.
                  </p>
                </div>

                <div className="flex-1 w-full flex flex-col justify-center ">
                  {history.map(({ id, title, desc }, index) => (
                    <div key={id} className="space-y-10">
                      <div className={`${index === 0 ? 'pt-0' : 'pt-10'}`}>
                        <p className="font-bold ss:text-[20px] text-[16px] leading-[24px] text-white">
                          {title}
                        </p>
                        <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white pt-5">
                          {desc}
                        </p>
                      </div>
                      <hr className="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
                  </div>*/}

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default cvRecentWork
