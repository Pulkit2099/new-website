import React from "react";

const Vehicle = () => {
  return (
    <div className="bg-[#000000]  py-[2rem] ">
      {/* heading */}
      <h2
        className="animated-heading  w-fit mx-auto text-white font-light text-center blade-top-padding-sm xl:pt-6 z-10 md:block lg:text-[3rem] "
        style={{ transform: "translate(0px, 0px)" }}
      >
        <span className="sg-translate">
          Evolving the drive with <span className="font-bold">360-degree</span>
          <br className=" md:block" /> comprehensive solutions
        </span>
      </h2>
      {/* desc for phone */}
      <div className="block mx-auto md:hidden text-center py-[2rem] ">
        <h4 className="sg-translate text-xl text-white mb-2 font-semibold">
          Passenger vehicles
        </h4>

        <p className="sg-translate text-white font-light">
          Revving up innovation <br className="md:hidden" /> from interior to
          exterior.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-space-between md:gap-[2rem]">
        <div className="cards-wrp hidden md:flex relative md:top-[5rem] lg:top-[2rem] flex-col self-center pl-14 md:ml-[10%] lg:ml-[15%] 2xl:py-10">
          <button
            type="button"
            className="card-details-1 text-white"
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            <h3 className="sg-translate text-left font-medium pb-2">
              Passenger vehicles
            </h3>
            <h6 className="sg-translate text-left font-light 2xl:text-lg">
              Revving up innovation from <br /> interior to exterior.
            </h6>
          </button>

          <button
            type="button"
            className="card-details-2 mt-14 opacity-20"
            style={{ transform: "translate(0px, 0px)", opacity: 0.2 }}
          >
            <h3 className="sg-translate text-left font-medium pb-2">
              Commercial vehicles
            </h3>
            <h6 className="sg-translate text-left font-light 2xl:text-lg">
              Advancing engineering <br /> for heavy-duty vehicles.
            </h6>
          </button>

          <div
            className="slider-parent absolute top-0 left-0 h-full w-[2px] bg-gray rounded-md"
            style={{ transform: "translate(0px, 0px)", opacity: 1 }}
          >
            <div
              className="slider-height h-[50%] w-[2px] bg-white rounded-md"
              style={{ transform: "translate(0px, 0%)" }}
            ></div>
          </div>
        </div>
        {/* video box */}
        <div className="w-full max-w-3xl mx-auto">
          <video
            className="w-full h-auto rounded-md"
            src="/car.mp4"
            autoPlay
            muted
            loop
            playsInline
            // controls
          />
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
