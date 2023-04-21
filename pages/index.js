import Hero from '@/components/Hero'
import styles from '@/styles'
import HeroSection from '@/components/HeroSection'
import About from '@/components/About'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
    
    <div className='bg-primary relative flex justify-center items-center px-10'>
      <div className='max-w-[1029px] w-full'>
        <Hero />
        <HeroSection />
        <About />
      </div>   
      
      <div className='absolute justify-self-end items-end'>
        <Image src='/gradient.svg' alt='gradient' width={667} height={475} />
        </div>

      </div>

    </div>
  )
}
