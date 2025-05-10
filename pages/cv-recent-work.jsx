import { Footer, Navbar } from '@/components'
import RecentWork from '@/components/RecentWork'
import { fetchCV } from '@/sanity/client'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

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

const cvRecentWork = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [actingCV, setActingCV] = useState(null)
  const [teachingCV, setTeachingCV] = useState(null)

  useEffect(() => {
    const getContent = async () => {
      setIsLoading(true)
      const acting = await fetchCV('acting')
      const teaching = await fetchCV('teaching')
      if (acting || teaching) {
        if (acting) {
          setActingCV(acting)
        }
        if (teaching) {
          setTeachingCV(teaching)
        }
        setIsLoading(false)
      }
    }

    getContent()
  }, [])

  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="News - Joe Gater"
        description="Stay updated on Joe's exciting ventures in filmmaking! Explore his screenplays and collaborations with director Tom Neo on thrilling projects in front and behind the camera. Get the latest news now!"
      />

      {!isLoading && (actingCV || teachingCV) && (
        <>
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
              {actingCV && (
                <Link href={actingCV.fileUrl} passHref legacyBehavior>
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
              )}
              {teachingCV && (
                <Link href={teachingCV.fileUrl} passHref legacyBehavior>
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
              )}
            </div>
          </div>
        </>
      )}

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

      <RecentWork />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default cvRecentWork
