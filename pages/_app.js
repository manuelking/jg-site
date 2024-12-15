import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from '@/components'
import { useRouter } from 'next/router'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}

function Layout({ children }) {
  const router = useRouter()
  const isViewingSanity = router.pathname.includes('/sanity')
  return (
    <div className="flex flex-col w-full">
      {!isViewingSanity && <Navbar />}
      <main>{children}</main>
    </div>
  )
}
