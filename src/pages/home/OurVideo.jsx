import React from "react";

const OurVideo = () => {
  return (
    <div className="bg-[#1C4670] md:h-[531px] px-3 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-white">
              Our Video Introductions
            </h2>

            <p className="text-[#AAB5CD]">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex gap-4">
              <img src="/ourVideo/1.svg" alt=''/>
              <div>
                <h2 className="text-xl text-white font-bold">
                  Explore ideas together
                </h2>
                <p className="text-[#AAB5CD]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="/ourVideo/2.svg" alt=''/>
              <div>
                <h2 className="text-xl text-white font-bold">
                  Bring those ideas to life
                </h2>
                <p className="text-[#AAB5CD]">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="/ourVideo/3.png" alt="" loading="lazy"  className="rounded-xl md:h-[25rem]" />
        </div>
      </div>
    </div>
  );
};

export default OurVideo;
