import React from "react";

const Button = ({ styles, text }) => (
  <button type="button" className={`py-4 pl-10 pr-6 font-poppins font-medium text-[18px] bg-tertiary rounded-[20px] text-white outline-none ${styles} border-[2px] hover:outline-primary`}>
    {text}
  </button>
);

export default Button;