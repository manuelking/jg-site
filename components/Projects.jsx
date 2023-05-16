import Image from 'next/image'
import React from 'react'
import { Button } from '.'

const Projects = () => {
  return (
    <section className='flex flex-col pb-[153px]'>

        <div className='flex flex-col'>
            <div className='flex-1 flex-col flex justify-center items-start'>
                <div className='flex justify-center items-center'>
                    <h2 className='font-bold ss:text-[64px] text-[60px] leading-[77px] text-white'>
                        What Joe's Up To
                    </h2>
                </div>

                <div className='flex justify-center pt-[84px]'>
                    <h2 className='font-bold ss:text-[36px] text-[32px] leading-[44px] text-white'>
                        Current Project
                    </h2>
                </div>
                
                <div className='flex justify-center pt-[39px] pb-[56px]'>
                    <p className='font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]'>
                        Joe is currently collaborating with videographer and director Tom Neo on a variety of exciting filmed projects, both in front and behind the camera.
                    </p>
                </div>
            </div>

            <div className='flex-1 flex sm:flex-row flex-col gap-y-10 gap-x-10 justify-start sm:items-start items-center justify-between pb-[162px]'>
                <div>
                    <Image src='/img6.svg' alt='img6' width={445} height={247} />
                </div>
                <div>
                    <Image src='/img7.svg' alt='img7' width={537} height={247} />
                </div>
            </div>
        </div>

        <div className='flex sm:flex-row relative flex-col-reverse md:gap-x-0 gap-x-10'>

            <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
                <Image src='/img8.svg' alt='img8' width={444} height={334} />
            </div>

            

            <div className='flex flex-1 flex-col justify-center sm:items-start items-center'>
                <div className='flex md:pb-[39px] pb-[19px]'>
                    <h2 className='font-bold md:text-[36px] text-[32px] leading-[44px] text-white'>
                    About Joe Grater
                    </h2>
                </div>

                <div className='flex max-w-[538px] h-[155]'>
                    <p className='font-light md:text-[20px] text-[16px] leading-[24px] text-white'>
                        Joe is currently in production for his playwriting debut “Coming Clean” which he is also directing. His hilarious short comedy which is due to be performed at the end of April, is about two student who decide to rob a house for money but if all goes wrong when the home owners get back early…
                    </p>
                </div>
            </div>
      
        </div>
    </section>
  )
}

export default Projects