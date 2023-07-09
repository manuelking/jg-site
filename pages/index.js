import Hero from '@/components/Hero'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Image from 'next/image'
import { Footer, Navbar } from '@/components'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="Joe Gater Actor & Teacher"
        description="Explore exciting acting opportunities with Joe Gater. Connect via Spotlight, email, Instagram, Twitter, or YouTube for a teching session."
      />
      <div className="px-10">
        <Navbar />
      </div>

      <div className="bg-primary relative flex justify-center items-center pt-[80px] px-10 pb-[77px]">
        <div className="max-w-[1029px] w-full z-10">
          <Hero />
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

      <div className="bg-primary relative flex justify-center items-center px-10 pb-[177px]">
        <div className="max-w-[900px] w-full z-10">
          <div className="flex ss:flex-row ss:gap-y-0 gap-y-8 flex-col justify-between">
            <div className="flex flex-col ss:items-start items-center">
              <p className="font-normal md:text-[24px] text-[18px]">
                Want to know More?
              </p>
              <h1 className="md:text-[44px] text-[34px]">Download my CV</h1>
            </div>
            <div className="flex flex-col justify-center space-y-6 font-light text-[20px] text-[#C7D6FF] ss:text-left text-center">
              <Link href="/jg-actingcv.pdf" passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  download="joegater-actingcv"
                >
                  Acting CV
                </a>
              </Link>
              <Link href="/jg-teachingcv.pdf" passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  download="joegater-teachingcv"
                >
                  Teaching CV
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
