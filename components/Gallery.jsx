import Image from 'next/image'

const Gallery = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex-1 flex-col flex justify-start items-start">
          <h1 className="font-bold ss:text-[64px] text-[60px] leading-[77px] text-white pb-[18px]">
            Gallery
          </h1>
          <hr className="border-white border-[1px] w-full max-w-[1029]" />
        </div>

        <div className="flex pt-[36px] items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-y-[54px] gap-x-10">
            <div className="flex justify-center">
              <Image
                src="/galimg1.svg"
                alt="Gallery Image 1"
                width={261}
                height={288}
                className="hover:scale-125 transition duration-500 cursor-pointer "
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/galimg2.svg"
                alt="Gallery Image 2"
                width={261}
                height={266}
                className="hover:scale-125 transition duration-500 cursor-pointer "
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/galimg3.svg"
                alt="Gallery Image 3"
                width={244}
                height={288}
                className="hover:scale-125 transition duration-500 cursor-pointer "
              />
            </div>

            <div className="flex justify-center">
              <Image
                src="/galimg4us.png"
                alt="Gallery Image 4"
                width={393}
                height={212}
                className="hover:scale-125 transition duration-500 cursor-pointer "
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/galimg5.jpeg"
                alt="Gallery Image 5"
                width={393}
                height={212}
                className="hover:scale-125 transition duration-500 cursor-pointer "
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/galimg6.jpeg"
                alt="Gallery Image 6"
                width={393}
                height={212}
                className="hover:scale-125 transition duration-500 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
