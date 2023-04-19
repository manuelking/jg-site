import Hero from '@/components/Hero'
import Image from 'next/image'
import styles from '@/styles'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary">
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </main>
  )
}
