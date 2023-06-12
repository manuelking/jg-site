import { cvLinks, menuLinks, navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleCV, setToggleCV] = useState(false)
  const [toggleMidScreen, setToggleMidScreen] = useState(false)
  const router = useRouter()

  return (
    <div className="w-full flex py-6 justify-between items-center navbar bg-primary">
      <Link href="/">
        <Image
          src="/logosvg.svg"
          alt="logo"
          width={141}
          height={136}
          className="lg:ml-[202px] sm:ml-14 xx:ml-10"
        />
      </Link>

      <ul className="list-none sd:flex hidden justify-end items-center flex-1 lg:mr-[202px] sm:mr-[100px]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-light cursor-pointer text-[20px] leading-[25px] text-[#C7D6FF] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-[73px]'
            } text-nav mr-12`}
          >
            {nav.title === 'CV' ? (
              <div className="group relative">
                <p className="font-light cursor-pointer text-[20px] leading-[25px] text-[#C7D6FF]">
                  {nav.title}
                </p>
                <div
                  className={`group-hover:block hidden p-6 bg-tertiary absolute min-w-[460px] rounded-b-xl sidebar z-20 top-6 -right-[68px]`}
                >
                  <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-2">
                    {cvLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`font-normal cursor-pointer text-[16px] text-nav `}
                      >
                        <Link href={nav.link}>{nav.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                className={
                  router.pathname == nav.link
                    ? 'underline underline-offset-2 decoration-1'
                    : ''
                }
                href={nav.link}
              >
                {nav.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="sd:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? '/close.svg' : '/menu.svg'}
          alt="menu"
          width={28}
          height={28}
          className="object-contain mr-10"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-10 min-w-[160px] rounded-xl sidebar z-20`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {menuLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-normal cursor-pointer text-[20px] text-nav mb-4`}
              >
                {nav.title === 'CV' ? (
                  <div className="flex flex-col">
                    <div
                      onClick={() => setToggleCV((prev) => !prev)}
                      className="flex-row flex items-center justify-center gap-x-2"
                    >
                      <p>CV</p>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className={`${toggleCV ? 'block' : 'hidden'} flex`}>
                      <ul className="list-none flex flex-col justify-end items-center flex-1 gap-y-2 py-4">
                        {cvLinks.map((nav, index) => (
                          <li
                            key={nav.id}
                            className={`font-normal cursor-pointer text-[12px] text-nav `}
                          >
                            <Link href={nav.link}>{nav.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link href={nav.link}>{nav.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
