import { fetchCV } from '@/sanity/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function KnowMore() {
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
    !isLoading &&
    (actingCV || teachingCV) && (
      <div className="bg-primary relative flex justify-center items-center px-10 pb-[177px]">
        <div className="max-w-[900px] w-full z-10">
          <div className="flex ss:flex-row ss:gap-y-0 gap-y-8 flex-col justify-between">
            <div className="flex flex-col ss:items-start items-center">
              <p className="font-normal md:text-[24px] text-[18px]">
                Want to know more?
              </p>
              <h1 className="md:text-[44px] text-[34px]">Download my CV</h1>
            </div>
            <div className="flex flex-col justify-center space-y-6 font-light text-[20px] text-[#C7D6FF] ss:text-left text-center">
              {actingCV && (
                <Link href={actingCV.fileUrl} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    download="joegater-actingcv"
                  >
                    Acting CV
                  </a>
                </Link>
              )}
              {teachingCV && (
                <Link href={teachingCV.fileUrl} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    download="joegater-teachingcv"
                  >
                    Teaching CV
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  )
}
