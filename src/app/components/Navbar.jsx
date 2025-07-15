import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center    bg-[#F9FBFF] py-[1rem]  px-[1rem] lg:px-[5rem] ">
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        // className="inline-block hover:opacity-80"
      >
        <img
          src="/Supreme_logos.png"
          alt="Dev"
          className="rounded-lg w-[148px] h-[44px]"
        />
      </a>
      {/* right div */}
      <div className=" hidden  lg:flex items-center gap-[3rem] ">
        <button className="border border-[1px] border-transparent rounded-[100px] text-[#000000] leading-[100%] bg-[#5CD6FF] h-[50px] w-[145px]  text-[16px] font-medium tracking-[0%] font-manrope">
          Contact Us
        </button>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80"
        >
          <img src="/bxl-linkedin.svg@2x.png" alt="Dev" className="w-6 h-6" />
        </a>{" "}
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block hover:opacity-80"
        >
          <img src="/eng.png" alt="Dev" className="w-[52px] h-[22px]" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
