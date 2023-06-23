import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative flex sm:flex-row flex-col pt-28 pb-16 sm:gap-y-0 gap-y-16">
      <hr className="border-white absolute top-5 border-[1px] w-full max-w-[1029px] mt-8 ss:hidden block" />

      <div className="flex-1 flex justify-between py-2 sm:items-start items-center flex-col md:gap-y-0 gap-y-8">
        <h2
          className={`font-normal md:text-[64px] text-[54px] leading-[88px] text-white`}
        >
          Spotlight
        </h2>
        <p className="font-light text-white md:text-[32px] text-[22px] leading-[40px] sm:text-left text-center">
          Check out my spotlight
        </p>

        <Link href="https://www.spotlight.com/1699-9052-7182">
          <Button>Spotlight</Button>
        </Link>
      </div>

      <div className="flex-col flex-1 flex justify-end sm:items-end items-center relative">
        <Image src="/img1.svg" alt="img1" width={543} height={349} priority />
      </div>
    </section>
  )
}

export default HeroSection
