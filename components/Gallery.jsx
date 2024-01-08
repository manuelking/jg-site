import { useCallback, useState } from 'react'
import Image from 'next/image'
import ImageViewer from 'react-simple-image-viewer'

const images = [
  {
    id: 'img1',
    src: '/galimg1.svg',
    alt: 'Gallery Image 1',
    w: 393,
    h: 288,
  },
  {
    id: 'img2',
    src: '/galimg2.svg',
    alt: 'Gallery Image 2',
    w: 393,
    h: 266,
  },
  {
    id: 'img3',
    src: '/galimg3.svg',
    alt: 'Gallery Image 3',
    w: 393,
    h: 288,
  },
  {
    id: 'img4',
    src: '/galimg4us.png',
    alt: 'Gallery Image 4',
    w: 393,
    h: 212,
  },
  {
    id: 'img5',
    src: '/galimg5.jpeg',
    alt: 'Gallery Image 5',
    w: 393,
    h: 212,
  },
  {
    id: 'img6',
    src: '/galimg6.jpeg',
    alt: 'Gallery Image 6',
    w: 393,
    h: 212,
  },
  {
    id: 'img7',
    src: '/jg-galimg7.jpeg',
    alt: 'Gallery Image 7',
    w: 393,
    h: 212,
  },
  {
    id: 'img8',
    src: '/jg-galimg8.jpeg',
    alt: 'Gallery Image 8',
    w: 393,
    h: 212,
  },
  {
    id: 'img9',
    src: '/jg-galimg9.jpeg',
    alt: 'Gallery Image 9',
    w: 393,
    h: 212,
  },
]

// className="hover:scale-125 transition duration-500 cursor-pointer "

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

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
            {images.map(({ id, src, alt, w, h }, index) => (
              <Image
                key={id}
                src={src}
                alt={alt}
                width={w}
                height={h}
                className="hover:scale-110 transition duration-500 cursor-pointer"
                onClick={() => openImageViewer(index)}
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images.map((i) => i.src)}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

// <div className="flex justify-center">
//               <Image
//                 src="/galimg1.svg"
//                 alt="Gallery Image 1"
//                 width={261}
//                 height={288}
//                 className="hover:scale-125 transition duration-500 cursor-pointer "
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/galimg2.svg"
//                 alt="Gallery Image 2"
//                 width={261}
//                 height={266}
//                 className="hover:scale-125 transition duration-500 cursor-pointer "
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/galimg3.svg"
//                 alt="Gallery Image 3"
//                 width={244}
//                 height={288}
//                 className="hover:scale-125 transition duration-500 cursor-pointer "
//               />
//             </div>

//             <div className="flex justify-center">
//               <Image
//                 src="/galimg4us.png"
//                 alt="Gallery Image 4"
//                 width={393}
//                 height={212}
//                 className="hover:scale-125 transition duration-500 cursor-pointer "
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/galimg5.jpeg"
//                 alt="Gallery Image 5"
//                 width={393}
//                 height={212}
//                 className="hover:scale-125 transition duration-500 cursor-pointer "
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/galimg6.jpeg"
//                 alt="Gallery Image 6"
//                 width={393}
//                 height={212}
//                 className="hover:scale-125 transition duration-500 cursor-pointer "
//               />
//             </div>
