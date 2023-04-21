import { footerLinks, socialMedia } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center flex-row '>
      <div>links</div>

      <div>icons</div>
    </div>
  )
}

export default Footer