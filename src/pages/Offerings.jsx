import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const offerings = [
  {
    id: 1,
    title: "Tithes & Offerings",
    description: "Honor God with your substance and support the work of the ministry.",
    image: "/images/tithe.jpg", // Change to actual image path
  },
  {
    id: 2,
    title: "Church Projects",
    description: "Contribute to the development of new church projects and community outreach.",
    image: "/images/projects.jpg", // Change to actual image path
  },
  {
    id: 3,
    title: "Missions & Outreach",
    description: "Support global and local missions to spread the Gospel worldwide.",
    image: "/images/missions.jpg", // Change to actual image path
  },
];

const Offerings = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Give & Support</h2>
        <p className="text-lg text-gray-600 mb-12">
          Your giving helps spread the message of Christ and supports church missions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offerings.map((offering) => (
          <div
            key={offering.id}
            data-aos="fade-up"
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${offering.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70"></div>

            <div className="relative z-10 text-white p-6 flex flex-col justify-between h-full">
              <h3 className="text-2xl font-semibold">{offering.title}</h3>
              <p className="text-sm mt-2">{offering.description}</p>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md">
                Give Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
