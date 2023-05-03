import Image from "next/image";
import React from "react";

const Button = ({ styles, children }) => (
  <button type="button" className={`flex flex-row items-center justify-center justify-between py-4 px-6 border-[1px] border-solid bg-tertiary rounded-[30px] text-white font-normal ${styles}`}>

    <div className='flex flex-[1.5] items-center justify-center text-[24px] leading-[30px]'>
      {children}
    </div>

    <div className='flex'>
      <Image src='/btnarr.svg' alt='arrow' width={35} height={35} />
    </div>
  </button>
);

export default Button;