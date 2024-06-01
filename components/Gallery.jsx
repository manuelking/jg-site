import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import ImageViewer from 'react-simple-image-viewer'
import { getGallery } from '@/sanity/client'
import { Oval } from 'react-loader-spinner'

const images = [
  {
    id: 'img16',
    src: '/jg-spiderman-4.jpg',
    name: 'Image 16',
    w: 250,
    h: 212,
  },
  {
    id: 'img15',
    src: '/jg-pino.jpg',
    name: 'Image 15',
    w: 250,
    h: 212,
  },
  {
    id: 'img14',
    src: '/jg-spiderman-3.jpg',
    name: 'Image 14',
    w: 250,
    h: 212,
  },
  {
    id: 'img13',
    src: '/jg-spiderman-2.JPG',
    name: 'Image 13',
    w: 250,
    h: 212,
  },
  {
    id: 'img12',
    src: '/jg-eeyore.JPG',
    name: 'Image 12',
    w: 230,
    h: 212,
  },
  {
    id: 'img11',
    src: '/jg-spiderman-1.JPG',
    name: 'Image 11',
    w: 250,
    h: 212,
  },
  {
    id: 'img10',
    src: '/jg-lluk4.jpeg',
    name: 'Gallery Image 10',
    w: 250,
    h: 212,
  },
  {
    id: 'img9',
    src: '/jg-lluk3.jpeg',
    name: 'Gallery Image 9',
    w: 393,
    h: 212,
  },
  {
    id: 'img8',
    src: '/jg-galimg8.jpeg',
    name: 'Gallery Image 8',
    w: 393,
    h: 212,
  },
  {
    id: 'img6',
    src: '/galimg6.jpeg',
    name: 'Gallery Image 6',
    w: 393,
    h: 212,
  },
  {
    id: 'img5',
    src: '/galimg5.jpeg',
    name: 'Gallery Image 5',
    w: 393,
    h: 212,
  },
  {
    id: 'img4',
    src: '/galimg4us.png',
    name: 'Gallery Image 4',
    w: 393,
    h: 212,
  },
  {
    id: 'img3',
    src: '/galimg3.svg',
    name: 'Gallery Image 3',
    w: 393,
    h: 288,
  },
  {
    id: 'img1',
    src: '/galimg1.svg',
    name: 'Gallery Image 1',
    w: 393,
    h: 288,
  },
]

// className="hover:scale-125 transition duration-500 cursor-pointer "

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  const [gallery, setGallery] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchGallery = async () => {
      setIsLoading(true)
      const gallery = await getGallery()
      if (gallery) {
        setGallery(gallery)
        setIsLoading(false)
      }
    }

    fetchGallery()
  }, [])

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
          {isLoading && !gallery ? (
            <Oval
              visible={isLoading}
              height="80"
              width="80"
              color="#C7D6FF"
              ariaLabel="oval-loading"
            />
          ) : (
            <GallerySection
              gallery={gallery && gallery.length > 0 ? gallery : images}
              currentImage={currentImage}
              isViewerOpen={isViewerOpen}
              openImageViewer={openImageViewer}
              closeImageViewer={closeImageViewer}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function GallerySection({
  gallery,
  currentImage,
  isViewerOpen,
  openImageViewer,
  closeImageViewer,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-y-[54px] gap-x-10">
      {gallery?.map((image, index) => (
        <Image
          key={image.id}
          src={image.src}
          alt={image.name}
          width={393}
          height={212}
          className="hover:scale-110 transition duration-500 cursor-pointer"
          onClick={() => openImageViewer(index)}
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={gallery.map((i) => i.src)}
          currentIndex={currentImage}
          disableScroll
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
        />
      )}
    </div>
  )
}

export default Gallery

{
  /*<div className="flex pt-[36px] items-center justify-center">
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
                disableScroll
                closeOnClickOutside={true}
                onClose={closeImageViewer}
                backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
              />
            )}
          </div>
            </div> */
}
