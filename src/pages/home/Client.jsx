import React, { useState, useEffect } from "react";

const randomPosition = (usedPositions) => {
  const positions = [
    "top-0 left-8",
    "top-10 right-10",
    "top-20 left-1/4",
    "top-28 right-1/3",
    "top-40 left-10",
    "top-48 right-1/4",
    "top-56 left-1/3",
    "top-64 right-8",
    "top-72 left-12",
    "top-80 right-16",
  ];

  // Remove used positions from the available positions array
  const availablePositions = positions.filter(position => !usedPositions.includes(position));

  // Randomly pick an available position
  const randomPos = availablePositions[Math.floor(Math.random() * availablePositions.length)];

  // Return the selected position and add it to the usedPositions list
  return randomPos;
};

const Client = () => {
  const [usedPositions, setUsedPositions] = useState([]);
  const icons = [
    { src: "/logo/1.svg", alt: "Icon 1" },
    { src: "/logo/2.svg", alt: "Icon 2" },
    { src: "/logo/3.svg", alt: "Icon 3" },
    { src: "/logo/4.svg", alt: "Icon 4" },
    { src: "/logo/1.svg", alt: "Icon 5" },
    { src: "/logo/2.svg", alt: "Icon 6" },
    { src: "/logo/3.svg", alt: "Icon 7" },
    { src: "/logo/4.svg", alt: "Icon 8" },
    { src: "/logo/1.svg", alt: "Icon 9" },
    { src: "/logo/2.svg", alt: "Icon 10" },
  ];

  // Generate random positions when the component is mounted
  const generatePositions = () => {
    let positions = [];
    let usedPositionsList = [];

    icons.forEach(() => {
      const newPos = randomPosition(usedPositionsList);
      usedPositionsList.push(newPos);
      positions.push(newPos);
    });

    setUsedPositions(usedPositionsList);
    return positions;
  };

  useEffect(() => {
    generatePositions();
  }, []);

  return (
    <div className="py-20 bg-[#FAFAFA] h-[40rem]">
      <h2 className="text-3xl font-bold text-center text-lg sm:text-3xl">Our Happy Clients</h2>
      <div className="flex items-center justify-center">
        <div className="w-full sm:w-[50rem] mt-6">
          <p className="text-[#666666] text-center text-sm sm:text-base">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        {/* Floating Icons */}
        <div className="relative flex flex-wrap justify-center w-full max-w-screen-lg">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`absolute rounded-full shadow-lg bg-white p-4 flex items-center justify-center transition-transform hover:scale-110 ${usedPositions[index]} 
                ${index % 2 === 0 ? "sm:w-14 sm:h-14 w-12 h-12" : "sm:w-16 sm:h-16 w-10 h-10"}`}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <button className="text-blue-500 hover:text-blue-700 font-medium text-sm sm:text-base">
          Show more →
        </button>
      </div>
    </div>
  );
};

export default Client;
