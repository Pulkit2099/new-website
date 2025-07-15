import React from "react";

const Footer = () => {
  return (
    <div
      className="h-[auto] bg-cover bg-center bg-right-bottom md:px-[2rem] py-[2rem]  lg:py-[8rem] md:py-[4rem]"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >
      {/* mid container */}
      <div className="max-w-[988px] px-[1rem] mx-auto flex flex-col  gap-[1rem]  md:gap-[3rem] ">
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          // className="inline-block hover:opacity-80"
        >
          <img
            src="/Supreme_logos.png"
            alt="Dev"
            className="rounded-lg w-auto h-10  lg: w-[226px] lg:h-[63px]"
          />
        </a>
        {/* inner content md box */}
        <div className="hidden md:flex md:flex-row justify-between items-start">
          {/* application box */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="mb-2 sg-translate font-semibold uppercase text-opacity-90">
              Applications
            </li>
            <li>
              <a
                href="/applications/apparel"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Apparel</span>
              </a>
            </li>
            <li>
              <a
                href="/applications/automotive"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Automotive</span>
              </a>
            </li>
            <li>
              <a
                href="/applications/filtration"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Filtration</span>
              </a>
            </li>
            <li>
              <a
                href="/applications/customised-nonwoven"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Customised Nonwoven</span>
              </a>
            </li>
          </ul>
          {/* application box ends here  */}
          {/* ------- */}
          {/* innovation box */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="mb-2 sg-translate uppercase font-bold">Company</li>
            <li>
              <a
                href="/who-we-are"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Innovation</span>
              </a>
            </li>
            <li>
              <a
                href="/global-competency"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Global Compentency</span>
              </a>
            </li>
            <li>
              <a
                href="/innovation"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Innovation</span>
              </a>
            </li>
            <li>
              <a
                href="/esg-impact"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">ESG Impact</span>
              </a>
            </li>
          </ul>
          {/* innovation box ends here */}
          {/* -------more box */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="mb-2 sg-translate uppercase font-bold">More</li>
            <li>
              <a
                href="/who-we-are"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Careers</span>
              </a>
            </li>
            <li>
              <a
                href="/global-competency"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="/innovation"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Terms and Conditions</span>
              </a>
            </li>
          </ul>
          {/* follow us box */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="mb-2 sg-translate uppercase font-bold">Follow Us</li>
            <li>
              <a
                href="/who-we-are"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="/global-competency"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Linkendin</span>
              </a>
            </li>
            <li>
              <a
                href="/innovation"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="/esg-impact"
                className="block whitespace-nowrap text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 focus:text-opacity-100 focus:outline-none underline-offset-4 decoration-from-font"
              >
                <span className="sg-translate">Medium</span>
              </a>
            </li>
          </ul>
          {/* end follow box */}
        </div>
        {/* phone version */}

        <div className=" grid grid-cols-2 items-start justify-between gap-6 sm:gap-10 lg:gap-20 md:pr-10 mt-8 2xl:mt-10 md:hidden">
          {/* Applications */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="font-semibold uppercase text-opacity-90">
              Applications
            </li>
            <li>
              <a
                href="/applications/apparel"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Apparel</span>
              </a>
            </li>
            <li>
              <a
                href="/applications/automotive"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Automotive</span>
              </a>
            </li>
            <li>
              <a
                href="/applications/filtration"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Filtration</span>
              </a>
            </li>
            <li>
              <a
                href="/applications/customised-nonwoven"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Customized Nonwoven</span>
              </a>
            </li>
          </ul>

          {/* Company */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="uppercase font-bold">Company</li>
            <li>
              <a
                href="/who-we-are"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Innovation</span>
              </a>
            </li>
            <li>
              <a
                href="/global-competency"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Global Competency</span>
              </a>
            </li>
            <li>
              <a
                href="/innovation"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">About Us </span>
              </a>
            </li>
            <li>
              <a
                href="/esg-impact"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate"> Contact Us</span>
              </a>
            </li>
          </ul>

          {/* More */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="font-semibold uppercase text-opacity-90">More</li>
            <li>
              <a
                href="/careers"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Careers</span>
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="block text-sm xl:text-base text-black whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
              >
                <span className="sg-translate">Terms and Conditions</span>
              </a>
            </li>
          </ul>

          {/* Follow Us */}
          <ul className="grid gap-3 sm:gap-5 text-black list-none">
            <li className="font-semibold uppercase text-opacity-90">
              Follow Us
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/supreme-group-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap font-normal transition-all duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/supreme-group-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap font-normal transition-all duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/supreme-group-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap font-normal transition-all duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/supreme-group-company/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm xl:text-base text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap font-normal transition-all duration-300"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 blade-top-padding-xl">
          <h6 className="hidden md:block text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
          <h6 className="hidden md:block text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
          <h6 className="block md:hidden text-sm text-black whitespace-nowrap">
            ©2024. All Rights Reserved.
          </h6>
        </div>
      </div>
      {/* mid container ends here  */}
    </div>
  );
};

export default Footer;
