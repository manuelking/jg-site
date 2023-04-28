import { footerLinks, socialMedia } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex w-full justify-between items-center bg-tertiary px-[205px]'>
        <div className='pt-[40px] pb-[54px]'>
          <h2 className='font-normal text-[20px] leading-[24px] text-[#001A5C]'>Joe Grater - Actor/ Teacher</h2>
          <ul className='font-normal text-[16px] leading-[19px] text-black pt-[15px]'>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
            <li>
              <Link href='/news'>News</Link>
            </li>
            <li>
              CV
            </li>
            <li>
              <Link href='/teaching'>Teaching</Link>
            </li>
          </ul>
        </div>

        <div className='pb-[81px] pt-[40px]'>
          <h2 className='font-normal text-[20px] leading-[24px] text-[#001A5C] pb-[15px]'>
            Follow Me:
          </h2>

          <div className='flex flex-row justify-center items-center'>
            <div className='flex pr-[17px]'>
              <Link href='https://youtube.com'>
                <Image src='/fticon-yt.svg' alt='yt footer' width={49} height={49} />
              </Link>
            </div>
            
            <div className='flex pr-[17px]'>
              <Link href='https://twitter.com'>
                <Image src='/fticon-tw.svg' alt='tw footer' width={36} height={36} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center py-[26px] bg-primary'>
        <p className='font-light text-[12px] leading-[13px] text-center text-[#789EFF]'>
        Created by Jay Warwick <br/>
        Need a passionate designer? <br/>
        Reach out: <br/>
        jaywarwick02@gmail.com <br/>
        </p>
      </div>
    </section>
  )
}

export default Footer