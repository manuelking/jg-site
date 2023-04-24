import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <section className='flex md:flex-row  relative flex-col-reverse py-20'>
    
    <hr className='border-white absolute top-5 border-[1px] w-full max-w-[1029px]'/>

    <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
      <Image src='/img2.svg' alt='img2' width={330} height={495} />
    </div>

    

    <div className='flex flex-1 flex-col flex justify-between pb-14'>
      <div className='flex justify-start items-start'>
        <h1 className='text-[64px]'>
          About Joe Grater
        </h1>
      </div>

      <div className='flex w-[646px] justify-start items-start py-16'>
        <p className='font-normal text-[24px] leading-[30px] text-white text-left'>
            Since he was young, Joe has been creating little videos and skits for him to act in, and has excelled in the dramatics. Currently in his finial year at the prestigious Italia Conti, he plans to continue creating out in the industry and enjoy everything that comes his way.
        </p>
      </div>
      
      <div className='flex justify-center items-center pt-6'>
        <Button>
            Reach Out
        </Button>
      </div>
    </div>
      
    </section>
  )
}

export default About