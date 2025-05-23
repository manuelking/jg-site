import { fetchRecentWork } from '@/sanity/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function RecentWork() {
  const [recentWork, setRecentWork] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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

  if (isLoading) {
    return
  }

  return (
    <div className="bg-darker relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
      <div className="max-w-[1029px] w-full z-0">
        {recentWork && recentWork.length > 0 ? (
          <div className="flex flex-col gap-24">
            {recentWork?.map(({ title, body, images }, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex-1 flex-col flex justify-center items-start">
                  <div className="flex justify-center">
                    <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
                      {title}
                    </h2>
                  </div>

                  <div className="flex justify-center pt-[39px] pb-[56px] font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
                    <PortableText
                      value={body}
                      components={{
                        marks: {
                          link: ({ children, value }) => {
                            const rel = !value?.href?.startsWith('/')
                              ? 'noreferrer noopener'
                              : undefined
                            return (
                              <a
                                href={value.href}
                                target="_blank"
                                rel={rel}
                                className="text-tertiary underline hover:text-blue-500 cursor-pointer"
                              >
                                {children}
                              </a>
                            )
                          },
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-wrap sm:flex-row flex-col gap-y-10 gap-x-16 sm:items-start items-center">
                  {images.map((image) => (
                    <Image
                      key={image._key}
                      src={image.url}
                      alt={image._ref}
                      width={350}
                      height={533}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
            No recent work. Check back soon to see what Joe has been up to.
          </p>
        )}
      </div>
    </div>
  )
}

// <div className="flex justify-center pt-[39px] pb-[56px]">
//   <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
//     {body}
//   </p>
// </div>
