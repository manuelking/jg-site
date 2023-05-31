import { contacts } from '@/constants'
import styles from '@/styles'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactCard = ({ icon, name, width, height, link, index }) => (
  <Link href={link}>
    <div className="flex bg-[#1C263F] rounded-full py-2 p-6 h-[81px] md:w-[503px]">
      <div className="flex flex-1 justify-between items-center flex-row ">
        <Image src={icon} alt={name} width={width} height={height} />
        <p className="text-white font-light xs:text-[20px] text-[16px] leading-[24px]">
          {name}
        </p>
        <Image src="./chev-arr.svg" alt="chevron" width={71} height={35} />
      </div>
    </div>
  </Link>
)

const FindMe = () => {
  return (
    <div className="pb-[252px]">
      <div className="flex-row pt-16 md:pt-0">
        <h2 className="font-normal xs:text-[48px] text-[34px] leading-[60px] text-white w-full pb-[30px]">
          Where to find me
        </h2>
        <hr className="max-w-[392px]" />
      </div>

      <div className="flex-1 flex flex-col grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-[24px] gap-y-[45px] w-full pt-[93px]">
        {contacts.map((contact, index) => (
          <ContactCard key={contact.id} {...contact} index={index} />
        ))}
      </div>
    </div>
  )
}

export default FindMe
