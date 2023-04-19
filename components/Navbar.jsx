import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full flex py-6 justify-between items-center navbar bg-primary'>
      <Image src='/logo.png' alt='logo' width={80} height={60} className='lg:ml-[202px] sm:ml-14 xx:ml-10'/>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 lg:mr-[202px] sm:mr-[100px]'>
       {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-normal cursor-pointer text-[15px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-nav mr-12`}>
          <Link href={nav.link}>{nav.title}</Link>
        </li>
       ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image src={toggle ? '/close.svg' : '/menu.svg'} alt='menu' width={28} height={28} className='object-contain mr-10' onClick={() => setToggle((prev) => !prev)} />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-tertiary absolute top-20 right-0 mx-4 my-10 max-w-[160px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 mr-[202px]'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-normal cursor-pointer text-[20px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'} text-nav mb-4`}>
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar