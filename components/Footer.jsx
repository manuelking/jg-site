import { footerLinks, socialMedia } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex ss:flex-row flex-col w-full justify-between items-center bg-tertiary md:px-[205px] px-[105px] gap-x-10'>
        <div className='pt-[40px] pb-[54px]'>
          <h2 className='font-normal ss:text-[20px] text-[24px] leading-[24px] text-[#001A5C] ss:text-left text-center'>Joe Grater - Actor/ Teacher</h2>
          <ul className='font-normal ss:text-[16px] text-[20px] ss:leading-[19px] leading-[29px] text-black pt-[15px] ss:text-left text-center'>
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

        <div className='pb-[54px]'>
          <h2 className='font-normal ss:text-[20px] text-[24px] leading-[24px] text-[#001A5C]'>Follow Me:</h2>
          <ul className='flex justify-center items-center gap-x-[17px] ss:pt-0 pt-4'>
            <li>
              <Link href='https://www.youtube.com/@joergater6883'>
                <Image src='/fticon-yt.svg' alt='yt footer' width={49} height={49} /> 
              </Link>
            </li>
            <li>
              <Link href='https://twitter.com/JoeGaterActor'>
                <Image src='/fticon-tw.svg' alt='tw footer' width={36} height={36} />
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/joegater_/?igshid=YmMyMTA2M2Y%3D'>
                <Image src='/fticon-ig.svg' alt='ig footer' width={39} height={39} />
              </Link>
            </li>
          </ul>
        </div>

        
      </div>

      <div className='flex justify-center items-center py-[26px] bg-primary'>
        <p className='font-light text-[12px] leading-[13px] text-center text-[#789EFF] cursor-pointer'>
          <a href='mailto:jaywarwick02@gmail.com'>
            Created by Jay Warwick <br/>
            Need a passionate designer? <br/>
            Reach out: <br/>
            jaywarwick02@gmail.com 
          </a> <br/>
        </p>
      </div>
    </section>
  )
}

export default Footer