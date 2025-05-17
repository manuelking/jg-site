import { contactsLogoMap } from '@/constants'
import { fetchFooterContactItems } from '@/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    const getContent = async () => {
      setIsLoading(true)
      const data = await fetchFooterContactItems()
      if (data) {
        setContacts(data)
        setIsLoading(false)
      }
    }

    getContent()
  }, [])

  return (
    <section className="flex flex-col">
      <div className="flex ss:flex-row flex-col w-full justify-between items-center bg-tertiary md:px-[205px] px-[105px] gap-x-10">
        <div className="pt-[40px] pb-[54px]">
          <h2 className="ss:block hidden font-normal ss:text-[20px] text-[24px] leading-[24px] text-[#001A5C] ss:text-left text-center">
            Joe Gater - Actor/ Teacher
          </h2>
          <h2 className="ss:hidden block font-normal ss:text-[20px] text-[20px] leading-[34px] text-[#001A5C] ss:text-left text-center">
            Joe Gater <br className="ss:hidden block" /> Actor/ Teacher
          </h2>
          <ul className="font-normal ss:text-[16px] text-[16px] ss:leading-[19px] leading-[29px] text-black pt-[15px] ss:text-left text-center">
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>CV</li>
            <li>
              <Link href="/teaching">Teaching</Link>
            </li>
          </ul>
        </div>

        <div className="pb-[54px]">
          <h2 className="font-normal ss:text-[20px] text-[20px] leading-[24px] text-[#001A5C]">
            Follow Me:
          </h2>
          {!isLoading && contacts?.length > 0 && (
            <ul className="flex justify-center items-center gap-x-[17px] ss:pt-0 pt-4">
              {contacts.map(({ id, type, title, link }) => {
                const icon = contactsLogoMap[type]
                return (
                  <li key={id}>
                    <Link href={link} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer">
                        {icon && (
                          <Image
                            src={icon.footer.src}
                            alt={title}
                            width={icon.footer.width}
                            height={icon.footer.height}
                          />
                        )}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center py-[26px] bg-primary">
        <p className="font-light text-[12px] leading-[13px] text-center text-[#789EFF] cursor-pointer">
          <a href="mailto:jaywarwick02@gmail.com">
            Created by Jay Warwick <br />
            Need a passionate designer? <br />
            Reach out: <br />
            jaywarwick02@gmail.com
          </a>{' '}
          <br />
        </p>
      </div>
    </section>
  )
}

export default Footer
