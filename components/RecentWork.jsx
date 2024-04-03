import { fetchRecentWork } from '@/sanity/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function RecentWork() {
  const [recentWork, setRecentWork] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  console.log(recentWork)

  useEffect(() => {
    const getRecentWork = async () => {
      setIsLoading(true)
      const work = await fetchRecentWork()
      if (work) {
        setRecentWork(work)
        setIsLoading(false)
      }
    }

    getRecentWork()
  }, [])
  return (
    <div className="bg-darker relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
      <div className="max-w-[1029px] w-full z-0">
        {recentWork?.map(({ title, body, images }, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex-1 flex-col flex justify-center items-start">
              <div className="flex justify-center">
                <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
                  {title}
                </h2>
              </div>

              <div className="flex justify-center pt-[39px] pb-[56px]">
                <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
                  {body}
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-wrap sm:flex-row flex-col gap-y-10 gap-x-16 sm:items-start items-center">
              {images.map((image) => (
                <Image
                  key={image._key}
                  src={image.url}
                  alt={image._ref}
                  width={220}
                  height={533}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
