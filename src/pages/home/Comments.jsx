import { useState } from "react";

const testimonials = [
  {
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    rating: 4.5,
    image: "/women.png",
  },
  {
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    rating: 4.5,
    image: "/women.png",
  },
  {
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    rating: 4.5,
    image: "/women.png",
  },
  {
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    rating: 4.5,
    image: "/women.png",
  },
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="bg-[#1C4670] py-20 px-3 md:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-white text-3xl font-bold mb-8">
            What people say about us
          </h2>

  
          <div className="flex gap-9">
            <button
              onClick={handlePrev}
              className="bg-orange-500 px-7 text-3xl rounded-full text-white hover:bg-orange-600"
            >
              &#x276E;
            </button>
            <button
              onClick={handleNext}
              className="bg-orange-500 px-7 text-3xl rounded-full text-white hover:bg-orange-600"
            >
              &#x276F;
            </button>
          </div>
        </div>
  
        {/* Testimonial Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 overflow-hidden mt-10">
          {/* Loop through testimonials, and adjust the currentIndex */}
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div key={index} className="w-[300px] sm:w-[400px] bg-white text-black p-6 rounded-lg shadow-md">
              <div className="flex justify-between">
                <img src="/comma.svg" alt="" loading="lazy" />
                <div className="flex">
                  {/* Star Ratings */}
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={`text-yellow-400 text-xl ${
                        index < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="my-4">
                <p className="text-sm italic">{testimonial.text}</p>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  loading="lazy" 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  }
  
