import { contacts } from '@/constants';
import styles from '@/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ContactCard = ({ icon, name, width, height, link, index }) => (
    <Link href={link} className='w-[503] h-[81]'>
        <div className='flex flex-row bg-[#1C263F] rounded-2xl py-2 p-6 justify-center justify-between items-center'>
                <Image src={icon} alt={name} width={width} height={height} />
                <p>{name}</p>
                <Image src='./chev-arr.svg' alt='chevron' width={71} height={35} />
        </div>
    </Link>
  );

const FindMe = () => {
  return (
    <div className=''>
        <div className=''>
            <h2 className='font-normal text-[48px] leading-[88px] text-white w-full'>
                Where to find me
            </h2>
            <hr className='max-w-[372px]'/>
        </div>

        <div className='flex-1 flex flex-col grid grid-cols-2 justify-center items-center gap-x-[24px] gap-y-[45px]'>
            {contacts.map((contact, index) => (
                <ContactCard key={contact.id} {...contact} index={index} />
            ))}
        </div>
    </div>
  )
}

export default FindMe