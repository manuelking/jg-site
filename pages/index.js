import Hero from '@/components/Hero'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Image from 'next/image'
import { Footer, Navbar } from '@/components'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="Joe Gater Actor & Teacher"
        description="Looking to connect with actor and acting teacher Joe Gater? Reach out via Spotlight, email, Instagram, Twitter, or YouTube, and explore exciting opportunities in the world of acting."
      />
      <div className="px-10">
        <Navbar />
      </div>

      <div className="bg-primary relative flex justify-center items-center pt-[80px] px-10 pb-[177px]">
        <div className="max-w-[1029px] w-full z-10">
          <section className="flex sm:flex-row gap-y-16 flex-col-reverse py-6 ">
            <div className="relative flex-col flex flex-1 md:justify-end justify-center sm:items-start items-center">
              <Image
                src="/img2.svg"
                alt="Joe Gater Image 2"
                width={200}
                height={365}
                className="z-0 fill"
                priority
              />
            </div>

            <div className="flex flex-1 flex-col justify-center sm:items-end items-center">
              <div className="flex justify-center items-center">
                <h1 className="font-normal sm:text-[64px] text-[54px] leading-[80px] text-white">
                  Joe Gater
                </h1>
              </div>

              <div className="flex justify-center pt-[48px]">
                <p className="font-light sm:text-[24px] text-[20px] leading-[29px] ss:text-right text-center text-white">
                  Actor / Teacher based in <br className="xs:block hidden" />{' '}
                  London and Reading
                </p>
              </div>
            </div>
          </section>
          <HeroSection />
          <About />
        </div>
      </div>

      <div className="absolute md:top-[715px] sm:top-[1050px] top-[1350px] inset-y-0 right-0 max-w-full z-0 justify-end items-end">
        <Image
          src="/gradient.svg"
          alt="gradient"
          width={700}
          height={475}
          className=""
        />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
