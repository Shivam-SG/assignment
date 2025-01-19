import React from "react";
import { IoStar } from "react-icons/io5";
import Box from "../../components/Box";

const Banner = () => {
  return (
    <div
      className="px-4 sm:px-20 py-10 h-[600px] sm:h-[600px]"
      style={{
        backgroundImage: "url('/Section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <IoStar className="text-yellow-400 text-xl" />
            <h2 className="text-lg sm:text-xl">Google rating</h2>
            <div className="flex gap-1">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <IoStar
                    key={index}
                    className="bg-yellow-400 text-white p-[0.9px]"
                  />
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight">
              Your trusted partner for compliance business needs
            </h2>

            <hr className="bg-[#F60014] h-[2px] w-12 my-4" />
          </div>

          <p className="text-base sm:text-lg text-[#4F4F4F]">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various{" "}
            <span className="text-[#585757] font-semibold">registrations</span>,{" "}
            <span className="text-[#585757] font-semibold">tax filings</span>,
            and other{" "}
            <span className="text-[#585757] font-semibold">legal matters</span>.
          </p>

          <div className="flex flex-col md:flex-row gap-6 pt-5">
            <div className="flex items-center gap-6">
              <Box />
              <div>
                <h2 className="bg-gradient-to-br from-[#FFA229] to-[#1C4670] text-xl sm:text-2xl font-bold text-transparent bg-clip-text">
                  4.5+
                </h2>
                <p className="text-sm sm:text-lg">Customer Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img
                src="/connect.svg"
                className="w-8 sm:w-10"
                alt="Clients icon"
                loading="lazy"
              />
              <div>
                <h2 className="bg-gradient-to-br from-[#FFA229] to-[#1C4670] text-xl sm:text-2xl font-bold text-transparent bg-clip-text">
                  20,000+
                </h2>
                <p className="text-sm sm:text-lg">Clients</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <img
                src="/handshake.svg"
                className="w-8 sm:w-10"
                alt="Financial stability icon"
                loading="lazy"
              />
              <div>
                <h2 className="bg-gradient-to-br from-[#FFA229] to-[#1C4670] text-xl sm:text-2xl font-bold text-transparent bg-clip-text">
                  99.8%
                </h2>
                <p className="text-sm sm:text-lg">Financial Stability</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-8 flex-wrap">
            <button className="rounded-md font-semibold bg-[#1C4670] text-white px-3 py-1 md:px-9 md:py-4 text-sm sm:text-base">
              Talk An Expert
            </button>

            <div className="flex items-center gap-4">
              <img
                src="/play.svg"
                alt="Play video icon"
                className="w-8 sm:w-10"
                loading="lazy"
              />
              <h2 className="font-semibold text-sm sm:text-lg">
                See how it works
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
