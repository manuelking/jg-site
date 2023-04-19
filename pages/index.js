import Hero from '@/components/Hero'
import Image from 'next/image'
import styles from '@/styles'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-primary">
      <div className={`${styles.boxWidth}`}>
        <HeroSection />
        <Hero />
      </div>
    </main>
  )
}
