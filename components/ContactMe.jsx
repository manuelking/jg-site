import Image from 'next/image'

const ContactMe = () => {
  return (
    <section className="flex flex-col sm:flex-row pb-[25px]">
      <div className="flex-[1.5] flex py-10 justify-start items-start flex-col">
        <h2 className="font-normal xs:text-[64px] text-[48px] leading-[77px] text-white">
          Contact Me
        </h2>
        <p className="pt-[74px] font-light text-white text-[24px] leading-[30px]">
          Get in Touch
        </p>
      </div>

      <div className="flex-col flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <Image
          src="/img3.svg"
          alt="img3"
          width={306}
          height={460}
          className="z-10"
          priority={true}
          style={{ objectFit: 'contain' }}
        />
        <Image
          src="/img3outline.svg"
          alt="img3outline"
          width={306}
          height={460}
          className="absolute z-0 sm:-right-[14px] sm:-bottom-[25px] -right-[15px] -bottom-[15px]"
        />
      </div>
    </section>
  )
}

export default ContactMe
