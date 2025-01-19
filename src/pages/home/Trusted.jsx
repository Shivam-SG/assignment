import React from "react";

const Trusted = () => {
  return (
    <div className="h-[236px] flex justify-center items-center px-4 sm:px-10">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Trusted By Over 100+ Startups and freelance business
        </h2>

        <div className="flex flex-wrap justify-center gap-10 pt-10">
          <img src="/company/oracle.svg" alt="Oracle" className="w-20 sm:w-40" />
          <img src="/company/morpheus.svg" alt="Morpheus" className="w-20 sm:w-40" />
          <img src="/company/samsung.svg" alt="Samsung" className="w-20 sm:w-40" />
          <img src="/company/monday.svg" alt="Monday" className="w-20 sm:w-40" />
          <img src="/company/segment.svg" alt="Segment" className="w-20 sm:w-40" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
