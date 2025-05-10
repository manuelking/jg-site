import { fetchCV } from '@/sanity/client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CVSection() {
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
    )
  )
}
