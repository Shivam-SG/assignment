import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 px-3 md:px-0 md:pl-20 py-20">
      <div className="space-y-4">
        <h2 className="text-[#EB8D15] text-sm">WELCOME TO REGISTERKARO.IN</h2>
        <h2 className="text-[#272D37] text-3xl font-bold">
          About <span className="text-[#FFA229]">Register Karo</span>
        </h2>

        <p className="text-base">
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I&apos;m
          extremely pleased with their performance, ability to execute, and
          willingness to adapt in our ever changing environment. Perry is an
          outstanding leader who is fanatical about customer satisfaction. He
          has built a solid team which has consistently delivered on projects
          thereby exceeding everyone&apos;s expectations. <br /> <br />I would
          strongly recommend their services to any organization that is looking
          for solid, reliable, and predictable outcomes.
        </p>

        <button className="bg-[#1C4670] text-white px-5 py-3 rounded-md flex items-center justify-center gap-2">
          Learn More <FaRegArrowAltCircleRight />
        </button>
      </div>

      <div className="flex items-center justify-center relative">
        <div className="w-[20rem] mt-9 md:mt-0 md:w-[32rem] h-64 md:h-80 overflow-hidden rounded-xl z-20">
          <img
            src="/about/about.jpeg"
            className="w-full h-full object-cover object-center"
            alt="About"
          />
        </div>

        <div className="absolute hidden md:block right-0 -top-9">
            <img src="/about/Vector.svg" alt="" className="w-10"/>
        </div>

        <div className="absolute hidden md:block right-0 bottom-0">
            <img alt="" src="/about/dot.png" />
        </div>
      </div>
    </div>
  );
};

export default About;
