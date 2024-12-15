import { Gallery } from '@/components'
import React from 'react'

export default function gallery() {
  return (
    <div className="bg-primary relative flex flex-col justify-center items-center pt-[80px] pb-[200px] px-10">
      <div className="max-w-[1029px] w-full z-0">
        <Gallery />
      </div>
    </div>
  )
}
