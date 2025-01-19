import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-[#FAFAFA] py-10 px-4 sm:px-10">
      <div className="pt-10">
        <h2 className="text-[#EB8D15] text-sm text-center">
          WELCOME TO REGISTERKARO.IN
        </h2>
        <h2 className="text-[#272D37] text-2xl sm:text-3xl font-bold text-center">
          Explore Our Services
        </h2>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20">
        <div className="relative flex justify-center px-4 sm:px-20 border-r-2 sm:border-r-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/services/1.svg" alt="" className="w-16" />
            <h2 className="text-lg sm:text-xl font-bold">Company Formation</h2>
            <p className="text-[#282728] text-center text-sm sm:text-base">
              Build web-based solutions that enhance customer experience.
            </p>

            <button className="flex items-center justify-center font-semibold gap-2 py-3">
              Learn more <FaRegArrowAltCircleRight />
            </button>
          </div>

          <div className="absolute bg-[#BB162B] w-2 h-5 top-10 -right-[5px]"></div>
        </div>

        <div className="relative flex justify-center px-4 sm:px-20 border-r-2 sm:border-r-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/services/2.svg" alt="" className="w-16" />
            <h2 className="text-lg sm:text-xl font-bold">Company Secretarial Services</h2>
            <p className="text-[#282728] text-center text-sm sm:text-base">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>

            <button className="flex items-center justify-center font-semibold gap-2 py-3">
              Learn more <FaRegArrowAltCircleRight />
            </button>
          </div>
          <div className="absolute bg-[#BB162B] w-2 h-5 bottom-10 -right-[5px]"></div>
        </div>

        <div className="flex justify-center px-4 sm:px-20 border-r-2 sm:border-r-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/services/3.svg" alt="" className="w-16" />
            <h2 className="text-lg sm:text-xl font-bold">Virtual Office Address</h2>
            <p className="text-[#282728] text-center text-sm sm:text-base">
              Foster customer relationships by effectively serving your market.
            </p>

            <button className="flex items-center justify-center font-semibold gap-2 py-3">
              Learn more <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20">
        <div className="relative flex justify-center px-4 sm:px-20 border-r-2 sm:border-r-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/services/4.svg" alt="" className="w-16" />
            <h2 className="text-lg sm:text-xl font-bold">Annual Compliance Services</h2>
            <p className="text-[#282728] text-center text-sm sm:text-base">
              Turn your ideas into modern products with our design experts.
            </p>

            <button className="flex items-center justify-center font-semibold gap-2 py-3">
              Learn more <FaRegArrowAltCircleRight />
            </button>
          </div>

          <div className="absolute bg-[#BB162B] w-2 h-5 top-10 -right-[5px]"></div>
        </div>

        <div className="relative flex justify-center px-4 sm:px-20 border-r-2 sm:border-r-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/services/5.svg" alt="" className="w-16" />
            <h2 className="text-lg sm:text-xl font-bold">Payroll Services</h2>
            <p className="text-[#282728] text-center text-sm sm:text-base">
              Expand your business across the globe with minimal effort.
            </p>

            <button className="flex items-center justify-center font-semibold gap-2 py-3">
              Learn more <FaRegArrowAltCircleRight />
            </button>
          </div>
          <div className="absolute bg-[#BB162B] w-2 h-5 bottom-10 -right-[5px]"></div>
        </div>

        <div className="flex justify-center px-4 sm:px-20 border-r-2 sm:border-r-2">
          <div className="flex flex-col items-center justify-center space-y-6">
            <img src="/services/6.svg" alt="" className="w-16" />
            <h2 className="text-lg sm:text-xl font-bold">Bookkeeping Services</h2>
            <p className="text-[#282728] text-center text-sm sm:text-base">
              Steering user behaviours with creative design, data insights & technology.
            </p>

            <button className="flex items-center justify-center font-semibold gap-2 py-3">
              Learn more <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex items-center justify-center my-16">
        <button className="bg-[#1C4670] text-white px-5 py-3 rounded-md text-sm sm:text-base">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default Services;
