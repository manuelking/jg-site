import { Footer } from '@/components'
import CVSection from '@/components/CVSection'
import RecentWork from '@/components/RecentWork'
import { NextSeo } from 'next-seo'

const recentWork = [
  {
    title: 'LapLandUK 2023',
    desc: 'Joe is officially a Lapland folk, and delighted to announce that he will be spending the Christmas season at LapLandUK. Him and his new friend Conker hope to get up to lots of mischief together!',
    images: [
      {
        src: '/lluk-11.jpg',
        alt: 'LaplandUK',
        w: 400,
        h: 533,
      },
      {
        src: '/jg-galimg9.jpeg',
        alt: 'LaplandUK',
        w: 220,
        h: 533,
      },
    ],
  },
]

const cvRecentWork = () => {
  return (
    <div className="bg-primary relative w-full overflow-hidden">
      <NextSeo
        title="News - Joe Gater"
        description="Stay updated on Joe's exciting ventures in filmmaking! Explore his screenplays and collaborations with director Tom Neo on thrilling projects in front and behind the camera. Get the latest news now!"
      />

      <CVSection />

      <div className="bg-darker relative flex flex-col justify-center items-center pt-[84px] pb-[35px] px-10">
        <div className="max-w-[1029px] w-full z-0 flex flex-col gap-6">
          <h2 className="font-bold ss:text-[64px] text-[60px] leading-[77px] text-white text-left">
            Recent Work
          </h2>
          <p className="font-light sm:text-[24px] text-[20px] leading-[29px] text-white">
            Take a look back at all the work Joe has done
          </p>
        </div>
      </div>

      <RecentWork />

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default cvRecentWork
