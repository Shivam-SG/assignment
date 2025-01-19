import React from "react";

const blogs = [
  {
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
    image: "/blog/blog1.jpeg",
  },
  {
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
    image: "/blog/blog2.jpeg",
  },
  {
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
    image: "/blog/blog1.jpeg",
  },
  {
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
    image: "/blog/blog4.jpeg",
  },
  {
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
    image: "/blog/blog5.jpeg",
  },
  {
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
    image: "/blog/blog6.jpeg",
  },
];

const App = () => {
  return (
    <div className="p-8">
      <div>
        <h2 className="text-sm text-[#EB8D15] text-center uppercase">
          EXPLORE OUR BLOGS
        </h2>
        <h2 className="text-3xl font-bold text-black text-center mt-5">
          Accelerate Digital Transformation
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {blog.author} • {blog.date}
              </p>
              <h3 className="font-semibold text-lg mt-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-[#1C4670] text-white px-4 py-2 rounded-lg hover:bg-[#3b638b]">
          Show more blogs
        </button>
      </div>
    </div>
  );
};

export default App;
