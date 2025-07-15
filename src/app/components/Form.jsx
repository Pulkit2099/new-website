import React from "react";

const Form = () => {
  return (
    <div className="bg-[#0067B1] text-[#FFFFFF] py-[3rem] px-[1rem] md:px-[3rem] lg:py-[7rem] flex flex-col-reverse gap-[2rem] md:flex-row md:justify-center md:items-center md:gap-[8rem] lg:gap-[12rem]">
      {/* left box */}
      <div>
        <span className="hidden md:block sg-translate text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-semibold">
          Get in touch
        </span>
        <div className="hidden md:block h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>

        <span className="sg-translate block font-normal text-base md:text-lg 2xl:text-2xl">
          For general enquiries
        </span>
        <ul className="list-none flex flex-col gap-3 md:gap-5 2xl:gap-7 pt-5 md:pt-7 2xl:pt-8">
          {/* Address */}
          <li className="flex flex-col gap-px items-start">
            <span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
              Address :
            </span>
            <span className="sg-translate font-normal text-white text-opacity-90 text-sm md:text-base 2xl:text-xl">
              110, 16th Road, Chembur,
              <br className="xl:hidden block" />
              Mumbai - 400071
            </span>
          </li>

          {/* Phone */}
          <li className="flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl">
            <span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
              Phone :
            </span>
            <a
              href="tel:+912225208822"
              className="font-normal hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-white text-opacity-90 text-sm md:text-base 2xl:text-xl"
            >
              <span className="sg-translate">+91 22 25208822</span>
            </a>
          </li>

          {/* Email */}
          <li className="flex flex-col items-start gap-px text-base md:text-lg 2xl:text-xl">
            <span className="sg-translate font-medium text-lg md:text-lg xl:text-xl">
              Email :
            </span>
            <a
              href="mailto: info@supremegroup.co.in"
              className="font-normal text-white hover:underline focus-visible:underline underline-offset-4 decoration-from-font outline-none focus-visible:outline-none text-opacity-90 text-sm md:text-base 2xl:text-xl"
            >
              info@supremegroup.co.in
            </a>
          </li>
        </ul>
      </div>
      {/* right box */}
      <div className="   md:block w-full lg:max-w-[356px]">
        <section className="w-full">
          <div className="Toastify"></div>
          <div>
            <span className="block md:hidden sg-translate text-2xl lg:text-[28px] xlg:text-3xl 2xl:text-4xl md:leading-snug lg:leading-snug 2xl:leading-snug font-semibold">
              Get in touch
            </span>
            <div className="block md:hidden h-[2px] w-12 bg-white my-3 md:my-5 lg:my-6 2xl:my-8"></div>

            <form
              noValidate
              className="mx-auto w-full grid gap-4 xl:gap-4 2xl:gap-9 mt-[2rem] lg:mt-0"
            >
              {/* Full Name */}
              <div className="relative">
                <input
                  className="sg-translate text-white placeholder:text-white placeholder:text-opacity-90 border-b-2 border-solid border-white border-opacity-40 focus-visible:border-opacity-100 transition-all duration-200 tracking-wide ease-in-out py-2 pr-2 w-full text-base lg:text-lg font-normal bg-transparent outline-none focus-visible:outline-none placeholder:sg-translate"
                  id="name"
                  name="name"
                  placeholder="Full name"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  className="text-white placeholder:text-white placeholder:text-opacity-90 border-b-2 border-solid border-white border-opacity-40 focus-visible:border-opacity-100 transition-all duration-200 tracking-wide ease-in-out py-2 pr-2 w-full text-base lg:text-lg font-normal bg-transparent outline-none focus-visible:outline-none"
                  type="email"
                  id="email"
                  name="email"
                  inputMode="email"
                  placeholder="Email"
                />
              </div>

              {/* Company */}
              <div className="relative">
                <input
                  className="text-white placeholder:text-white placeholder:text-opacity-90 border-b-2 border-solid border-white border-opacity-40 focus-visible:border-opacity-100 transition-all duration-200 tracking-wide ease-in-out py-2 pr-2 w-full text-base lg:text-lg font-normal bg-transparent outline-none focus-visible:outline-none"
                  type="text"
                  id="company"
                  name="company"
                  inputMode="text"
                  placeholder="Company"
                />
              </div>

              {/* Message */}

              <div className="relative">
                <input
                  className="text-white placeholder:text-white placeholder:text-opacity-90 border-b-2 border-solid border-white border-opacity-40 focus-visible:border-opacity-100 transition-all duration-200 tracking-wide ease-in-out py-2 pr-2 w-full text-base lg:text-lg font-normal bg-transparent outline-none focus-visible:outline-none"
                  type="text"
                  inputMode="text"
                  id="message"
                  name="message"
                  placeholder="Message"
                />
              </div>

              {/* Submit Button */}
              <div className=" flex justify-center md:grid relative place-content-center md:place-content-start">
                <button
                  type="submit"
                  className=" bg-white flex justify-center gap-1 w-full relative px-8 md:px-12 py-3 text-sm lg:text-base font-semibold text-white border border-white rounded-full transition-all duration-700 ease-in-out hover:text-black focus:text-black focus:bg-white hover:border-transparent stroke-dark hover:stroke-white outline-none disabled:opacity-70 disabled:cursor-not-allowed !bg-transparent"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Form;
