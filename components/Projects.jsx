import { fetchCurrent } from '@/sanity/client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getCurrentProject = async () => {
      setIsLoading(true)
      const work = await fetchCurrent('project')
      if (work) {
        setCurrentProject(work)
        setIsLoading(false)
      }
    }

    getCurrentProject()
  }, [])
  return (
    !isLoading &&
    currentProject && (
      <section className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex-1 flex-col flex justify-center items-start">
            <div className="flex justify-center">
              <h2 className="font-bold ss:text-[36px] text-[32px] leading-[44px] text-white">
                {currentProject?.title}
              </h2>
            </div>

            <div className="flex justify-center pt-[39px] pb-[56px]">
              <p className="font-light ss:text-[20px] text-[16px] leading-[24px] text-white max-w-[900px]">
                {currentProject?.body[0].children[0].text}
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-wrap sm:flex-row flex-col gap-y-10 gap-x-16 sm:items-start items-center">
            {currentProject?.images.map((i) => (
              <Image
                key={i._key}
                src={i.url}
                alt={currentProject?.title}
                width={450}
                height={533}
              />
            ))}
          </div>
        </div>
      </section>
    )
  )
}

export default Projects
