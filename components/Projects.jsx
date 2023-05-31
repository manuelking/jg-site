import Image from 'next/image'
import React from 'react'
import { Button } from '.'

const Projects = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex-1 flex-col flex justify-center items-start">
          <div className="flex justify-center">
            <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
              Current Project
            </h2>
          </div>

          <div className="flex justify-center pt-[39px] pb-[56px]">
            <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
              Joe is currently collaborating with videographer and director Tom
              Neo on a variety of exciting filmed projects, both in front and
              behind the camera.
            </p>
          </div>
        </div>

        <div className="flex-1 flex sm:flex-row flex-col gap-y-10 gap-x-10 justify-start sm:items-start items-center justify-between">
          <div>
            <Image src="/img6.svg" alt="img6" width={445} height={247} />
          </div>
          <div>
            <Image src="/img7.svg" alt="img7" width={537} height={247} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
