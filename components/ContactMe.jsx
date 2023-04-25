import styles from '@/styles'
import Image from 'next/image'
import React from 'react'
import { Button } from './index'

const ContactMe = () => {
  return (
    <section className='flex flex-row pb-16'>
        <div className='flex-[1.5] flex py-10 justify-start items-start flex-col'>
            <h2 className={`${styles.heading2}`}>
                Contact Me
            </h2>
            <p className='pt-[71px] text-normal text-white text-[24px] leading-[40px]'>
                Get in Touch
            </p>
        </div>

        <div className='flex-col relative flex-1 flex justify-end items-end md:ml-10 ml-0 md:mt-0 mt-10 relative'>
            <Image src='/img3.svg' alt='img3' width={306} height={460} />
        </div>
  </section>
  )
}

export default ContactMe