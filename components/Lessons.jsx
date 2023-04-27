import Image from 'next/image'
import React from 'react'

const Lessons = () => {
  return (
    <section className='flex flex-col'>
        
        <div className='flex flex-row justify-start'>
            <div className='flex items-center pr-[37px]'>
                <div className='flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full'>
                    <Image src='./questionmark.svg' alt='question mark' width={36} height={77} className='absolute' />
                </div>
            </div>
            <div className='flex items-center'>
                <h2 className='font-semibold text-[36px] leading-[44px] text-white'>
                    What I Teach
                </h2>
            </div>
        </div>

        <div className='py-[100px]'>
            middle content
        </div>

        <div className='flex flex-row justify-start'>
            <div className='flex items-center pr-[37px]'>
                <div className='flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full'>
                    <Image src='./cost.svg' alt='cost' width={64} height={64} className='absolute' />
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='font-semibold text-[36px] leading-[44px] text-white pb-[17px]'>
                    Cost
                </h2>
                <p className='font-light text-[16px] leading-[20px] text-white'>
                    Sessions will generally be £15 per hour, but the length of the session is completely up to you.
                </p>
            </div>
        </div>

        <div className='flex flex-row justify-start pt-[72px] pb-[151px]'>
            <div className='flex items-center pr-[37px]'>
                <div className='flex items-center justify-center bg-tertiary relative w-[115px] h-[115px] rounded-full'>
                    <Image src='./ping.svg' alt='location' width={48} height={48} className='absolute' />
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='font-semibold text-[36px] leading-[44px] text-white pb-[17px]'>
                    Location
                </h2>
                <p className='font-light text-[16px] leading-[20px] text-white'>
                    Private session will usually be held on zoom, but depending on your location and the session's needs I can come to you.
                </p>
            </div>
        </div>

        <div className='flex flex-col justify-center items-center pb-[194px]'>
            <p className='font-light text-[32px] leading-[40px] text-white text-center pb-[31px]'>
                Bookings/ Inquiries: 
            </p>
            <h2 className='font-semibold text-[48px] leading-[58px] text-white text-center underline'>
                joe@joegater.com
            </h2>
        </div>

    </section>
  )
}

export default Lessons