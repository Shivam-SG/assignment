import React from "react";

const ServicesMobile = () => {
  return (
    <div className="bg-[#1C4670] px-3 md:px-20 py-20 grid grid-cols-1 md:grid-cols-2 overflow-hidden h-[50rem] md:h-full">
      <div className="space-y-10">
        <h2 className="text-white text-3xl font-bold">
          Manage Your Services by your Mobile Phone
        </h2>
        <p className="text-[#AAB5CD]">
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.{" "}
        </p>

        <div className="mt-20">
          <h2 className="text-white">Get the App</h2>
          <div className="flex mt-4">
            <img src="/mobile/1.png" alt="" className="w-40 h-20 md:w-70 md:h-20" />
            <img src="/mobile/2.png" alt="" className="w-40 h-20 md:w-70 md:h-20" />
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="/mobile/mobile.png" alt="" className="absolute w-[70rem] -top-40"/>
      </div>
    </div>
  );
};

export default ServicesMobile;
