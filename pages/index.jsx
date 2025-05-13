import Hero from '@/components/Hero'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Image from 'next/image'
import { Footer, Navbar } from '@/components'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import KnowMore from '@/components/KnowMore'

export default function Home() {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="Joe Gater Actor & Teacher"
        description="Explore exciting acting opportunities with Joe Gater. Connect via Spotlight, email, Instagram, Twitter, or YouTube for a teching session."
      />

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

      <KnowMore />

      <div>
        <Footer />
      </div>
    </div>
  )
}
