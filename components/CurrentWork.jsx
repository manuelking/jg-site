import { fetchCurrent } from '@/sanity/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function CurrentWork() {
  const [currentWork, setCurrentWork] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getCurrentWork = async () => {
      setIsLoading(true)
      const work = await fetchCurrent('work')
      if (work) {
        setCurrentWork(work)
        setIsLoading(false)
      }
    }

    getCurrentWork()
  }, [])

  return (
    !isLoading &&
    currentWork && (
      <div className="bg-darker relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex-1 flex-col flex justify-center items-start">
                <div className="flex justify-center">
                  <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
                    {currentWork?.title}
                  </h2>
                </div>

                <div className="flex justify-center pt-[39px] pb-[56px]">
                  <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
                    {currentWork?.body[0].children[0].text}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-wrap sm:flex-row flex-col gap-y-10 gap-x-16 sm:items-start items-center">
                {currentWork?.images.map((i) => (
                  <Image
                    key={i._key}
                    src={i.url}
                    alt={currentWork?.title}
                    width={450}
                    height={533}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
