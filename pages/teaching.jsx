import { BookHero, Footer, Lessons, Navbar } from '@/components'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'

const teaching = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo title="Teaching - Joe Gater" description="" />

      <div className="bg-primary relative flex justify-center pt-[80px] pb-[66px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <BookHero />
        </div>
      </div>

      <div className="bg-darker relative flex justify-center pt-[50px] pb-[70px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <Lessons />
        </div>
      </div>

      <div className="bg-primary relative flex justify-center pt-[79px] pb-[150px] px-10">
        <div className="max-w-[1029px] w-full z-0">
          <div className="flex flex-col justify-center items-center">
            <p className="font-light xs:text-[32px] text-[22px] leading-[40px] text-white text-center pb-[31px]">
              Bookings/ Inquiries:
            </p>
            <h2 className="font-semibold xs:text-[48px] text-[20px] leading-[58px] text-white text-center underline cursor-pointer">
              <a href="mailto:joe@joegater.com">joe@joegater.com</a>
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-primary relative flex justify-center items-center px-10 pb-[150px]">
        <div className="max-w-[900px] w-full z-10">
          <div className="flex items-center justify-center text-center xs:text-[24px] text-[18px] font-light text-[#C7D6FF]">
            <Link href="/jg-teachingcv.pdf" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                download="joegater-teachingcv"
              >
                Want to know more? Download my teaching CV
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default teaching
