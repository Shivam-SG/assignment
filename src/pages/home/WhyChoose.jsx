import React from "react";

const WhyChoose = () => {
  return (
    <div className="grid grid-cols-1 md:grid-rows-2 gap-4 px-3 md:px-20 my-20">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="space-y-3">
          <h2 className="text-[#EB8D15] text-sm">WHY REGISTERKARO.IN</h2>
          <h2 className="text-[#272D37] text-3xl font-bold">
            Why Choose Register Karo
          </h2>

          <p>
            It is with consistent services and results that build trust with the
            people and that in turn help us to serve the business better.
          </p>
        </div>

        <div className="w-full md:w-[388px] h-[215px] bg-[#FEF3EF] border border-[#FCDDEC] rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 px-6">
            <img src="/whyChoose/1.svg" alt='' className="w-10"/>
            <h2 className="text-xl text-center">Confidential & Safe</h2>
            <p className="text-[#666666] text-center">All your private information is safe
            with us</p>
          </div>
        </div>
        <div className="w-full md:w-[388px] h-[215px] bg-[#F1FBF3] border border-[#FCDDEC] rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 px-6">
            <img src="/whyChoose/2.svg" alt='' className="w-10"/>
            <h2 className="text-xl text-center">No Hidden Fee</h2>
            <p className="text-[#666666] text-center">Everything is put before you with
            no hidden charges or conditions</p>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col md:flex-row justify-end gap-4">
      <div className="w-full md:w-[312px] h-[215px] bg-[#EDF3FF] border border-[#FCDDEC] rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 px-6">
            <img src="/whyChoose/3.svg" alt='' className="w-10"/>
            <h2 className="text-xl text-center">Guaranteed Satisfaction</h2>
            <p className="text-[#666666] text-center">We ensure that you stay 100%
            satisfied with our offered services</p>
          </div>
        </div>
        <div className="w-full md:w-[312px] h-[215px] bg-[#FBF1FB] border border-[#FCDDEC] rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 px-6">
            <img src="/whyChoose/4.svg" alt='' className="w-10"/>
            <h2 className="text-xl text-center">Expert CA/CS Assistance</h2>
            <p className="text-[#666666] text-center">Prompt support from our in-house
            expert professionals</p>
          </div>
        </div>
        <div className="w-full md:w-[312px] h-[215px] bg-[#F1FBF3] border border-[#FCDDEC] rounded-xl flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 px-6">
            <img src="/whyChoose/1.svg" alt='' className="w-10"/>
            <h2 className="text-xl text-center">Confidential & Safe</h2>
            <p className="text-[#666666] text-center">All your private information is safe
            with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
