import { fetchCurrent } from '@/sanity/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'

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

  if (!currentWork) {
    return
  }

  // const { title, body, images } = currentWork && currentWork

  return (
    !isLoading &&
    currentWork.length > 0 && (
      <div className="bg-darker relative flex flex-col justify-center items-center pt-[48px] pb-[97px] px-10">
        <div className="max-w-[1029px] w-full z-0 gap-24 flex flex-col">
          {currentWork.map(({ title, body, images }) => {
            return (
              <div className="flex flex-col">
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
                  {images.map((i) => (
                    <Image
                      key={i._key}
                      src={i.url}
                      alt={title}
                      width={450}
                      height={533}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  )
}

// ;<p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
//   {body[0].children[0].text}
// </p>
