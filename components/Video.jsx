import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Video = () => {
  return (
    <section className='flex flex-col pb-[153px]'>
      <div className='flex flex-col'>

        <div className='flex-1 flex-col flex justify-center items-center'>

          <div className='flex justify-center items-center'>
            <h1 className='font-bold text-[36px] leading-[44px] text-center text-white'>
              Videos
            </h1>
          </div>

          <div className='flex flex-col justify-center items-center pt-[39px] pb-[85px]'>
            <p className='font-normal text-[20px] leading-[24px] text-center text-white'>
            Joe is always creating content for his YouTube channel which you can find here:
            </p>
            <p className='font-normal text-[20px] leading-[24px] text-center text-white pt-6 underline'>
              <Link href='https://youtube.com/@joergater6883'>
                https://youtube.com/@joergater6883
              </Link>
            </p>
          </div>

        </div>

        <div className='flex-1 flex justify-center items-center relative pb-8'>
          <Link href='https://www.youtube.com/watch?v=4Qz_QXlg2FE'>
            <Image src='/img9.svg' alt='img9' width={469} height={305} />
          </Link>
        </div>
            
      </div>
    </section>
  )
}

export default Video