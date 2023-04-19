import React from 'react'
import styles from '@/styles'

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-normal text-[30px] text-white'>Joe Grater</h1>
            </div>
        </div>
    </section>
  )
}

export default Hero