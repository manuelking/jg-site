import { contactsLogoMap } from '@/constants'
import { fetchContactItems } from '@/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ContactCard = ({ title, link, type }) => {
  const icon = contactsLogoMap[type]
  return (
    <Link href={link} passHref legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center bg-[#1C263F] rounded-full py-2 p-6 h-[81px] md:w-[503px]">
          <div className="flex justify-between items-center flex-row w-full">
            {icon && (
              <Image
                src={icon.src}
                alt={title}
                width={icon.width}
                height={icon.height}
              />
            )}
            <p className="text-white font-light xs:text-[20px] text-[16px] leading-[24px] xf:block hidden pl-2">
              {title}
            </p>
            <Image src="./chev-arr.svg" alt="chevron" width={71} height={35} />
          </div>
        </div>
      </a>
    </Link>
  )
}

const FindMe = ({ heading }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    const getContent = async () => {
      setIsLoading(true)
      const data = await fetchContactItems()
      if (data) {
        setContacts(data)
        setIsLoading(false)
      }
    }

    getContent()
  }, [])

  if (!contacts || isLoading) {
    return
  }

  return (
    <div className="pb-[252px]">
      <div className="flex-row pt-16 md:pt-0">
        {heading && (
          <h2 className="font-normal xs:text-[48px] text-[34px] leading-[60px] text-white w-full pb-[30px]">
            {heading}
          </h2>
        )}
        <hr className="max-w-[392px]" />
      </div>

      <div className="flex-1 flex-col grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-[24px] gap-y-[45px] w-full pt-[93px]">
        {contacts?.map((contact) => (
          <ContactCard key={contact._id} {...contact} />
        ))}
      </div>
    </div>
  )
}

export default FindMe
