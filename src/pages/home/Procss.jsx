import React from "react";

const Procss = () => {
  return (
    <div className="bg-[#FFA229] flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 px-3 md:px-20 py-10">
      <div className="flex items-center gap-6">
        <div className="bg-[#EB5757] rounded-full p-4">
          <img src="/process/1.svg" />
        </div>
        <h2 className="text-lg font-bold">Fill up Application Form</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-[#27AE60] rounded-full p-4">
          <img src="/process/2.svg" alt=''/>
        </div>
        <h2 className="text-lg font-bold">Make Online Payment</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-[#F2994A] rounded-full p-4">
          <img src="/process/3.svg" alt=''/>
        </div>
        <h2 className="text-lg font-bold">Executive will Process Application</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="bg-[#828282] rounded-full p-4">
          <img src="/process/4.svg" alt=''/>
        </div>
        <h2 className="text-lg font-bold">Get Confirm Mail</h2>
      </div>
      
    </div>
  );
};

export default Procss;
