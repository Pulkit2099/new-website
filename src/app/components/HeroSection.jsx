// import React from "react";

// const HeroSection = () => {
//   return (
//     <>
//       <div className=" bg-black absolute inset-0 grid place-content-center place-items-center pt-10 md:pt-5 lg:pt-10 gap-2 text-center w-11/12 mx-auto">
//         <span className="sg-translate font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
//           Driven by performance
//         </span>

//         <h2 className="sg-translate text-white font-light leading-tight pb-2">
//           <span className="font-semibold">
//             Soft trims and <span className="text-blue">NVH solutions</span>
//           </span>
//           <br className="hidden md:block" />
//           for seamless rides
//         </h2>
//       </div>
//     </>
//   );
// };

// export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#00000099] px-[1rem] py-[7rem] flex flex-col justify-center items-center max-h-[925px] lg:h-[80vh] text-center font-manrope">
      <span className="  sg-translate font-manrope font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
        Performance in motion
      </span>
      <h2 className="sg-translate text-white font-light leading-tight pb-2">
        <span className="font-semibold text-[28px] lg:text-[3rem] leading-[1.25em] lg:leading-[58px]  ">
          Soft trims and NVH solutions
        </span>
        <br className="hidden md:block font-light" />
        <span className="text-center ml-[.5rem] lg:ml-0 text-[28px] lg:text-[3rem]">
          for seamless rides
        </span>
      </h2>
    </div>
  );
};

export default HeroSection;
