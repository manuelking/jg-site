import React from "react";

const Button = ({ styles, children }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[24px] text-white bg-tertiary rounded-[10px] outline-none ${styles}`}>
    {children}
  </button>
);

export default Button;