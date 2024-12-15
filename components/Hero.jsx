import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchHero } from '@/sanity/client'
import { PortableText } from '@portabletext/react'

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [content, setContent] = useState(null)

  useEffect(() => {
    const getContent = async () => {
      setIsLoading(true)
      const data = await fetchHero()
      if (data) {
        setContent(data)
        setIsLoading(false)
      }
    }

    getContent()
  }, [])

  if (!content) {
    return
  }

  return (
    !isLoading && (
      <section className="flex sm:flex-row gap-y-16 flex-col-reverse py-6 ">
        <div className="relative flex-col flex flex-1 md:justify-end justify-center sm:items-start items-center">
          {content?.image ? (
            <Image
              src={content?.src}
              alt="Joe Gater Image 2"
              width={330}
              height={495}
              className="z-0 fill rounded-3xl"
              priority={true}
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <Image
              src="/img22.png"
              alt="Joe Gater Image 2"
              width={330}
              height={495}
              className="z-0 fill"
              priority={true}
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center sm:items-end items-center">
          <div className="flex justify-center items-center">
            <h1 className="font-normal sm:text-[64px] text-[54px] leading-[80px] text-white">
              {content?.title || 'Joe Gater'}
            </h1>
          </div>

          {content?.body ? (
            <div className="flex flex-col pt-[48px] justify-center font-light sm:text-[24px] text-[20px] leading-[29px] ss:text-right text-center text-white">
              <PortableText
                value={content?.body}
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
          ) : (
            <div className="flex justify-center pt-[48px]">
              <p className="font-light sm:text-[24px] text-[20px] leading-[29px] ss:text-right text-center text-white">
                Actor / Teacher based in <br className="xs:block hidden" />{' '}
                London and Reading
              </p>
            </div>
          )}
        </div>
      </section>
    )
  )
}

export default Hero
