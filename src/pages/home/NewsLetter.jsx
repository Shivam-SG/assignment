import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-custom-gradient px-20 py-20">
      <h2 className="text-sm text-white text-center">1% OF THE INDUSTRY</h2>
      <h2 className="text-3xl font-bold text-white text-center">
        Welcome to your new digital reality. Now.
      </h2>

      <div className="flex justify-center items-center mt-10">
        <input
          placeholder="Enter Yout Email"
          className="px-3 py-3 rounded-tl-md rounded-bl-md w-96"
        />

        <button className="bg-[#FFA229] text-white px-4 font-bold py-3 rounded-tr-md rounded-br-md">
          Submit
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center mt-10 gap-4">
        <div className="flex gap-4">
          <img src="/tick.svg" alt=''/>
          <h2 className="text-white">Instant results</h2>
        </div>

        <div className="flex gap-4">
          <img src="/tick.svg" alt=''/>
          <h2 className="text-white">User-friendly interface</h2>
        </div>

        <div className="flex gap-4">
          <img src="/tick.svg" alt=''/>
          <h2 className="text-white">Personalized customization</h2>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
