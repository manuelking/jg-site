import { contacts, gallery } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <section className='flex flex-col pb-[153px]'>

        <div className='flex flex-col'>

            <div className='flex-1 flex-col flex justify-start items-start'>
                    <h1 className='font-bold text-[64px] leading-[77px] text-white pb-[18px]'>
                        Gallery
                    </h1>
                    <hr className='border-white border-[1px] w-full max-w-[1029]'/>
            </div>

            <div className='flex pt-[36px] items-center justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-y-[54px]'>
                    <div className='flex justify-center'>
                        <Image src='/galimg1.svg' alt='galimg1' width={261} height={288} />
                    </div>
                    <div className='flex justify-center'>
                        <Image src='/galimg2.svg' alt='galimg2' width={261} height={266} />
                    </div>
                    <div className='flex justify-center'>
                        <Image src='/galimg3.svg' alt='galimg3' width={244} height={288} />
                    </div>
                    <div className='flex justify-center'>
                        <Image src='/galimg4.svg' alt='galimg4' width={393} height={212} />
                    </div>
                </div>
                
            </div>

            
            
        </div>

    </section>
  )
}

export default Gallery