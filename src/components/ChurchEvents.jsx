import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import eventsData from "../../public/CardEvents.json"; // Import external JSON file

const ChurchEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });

    // Simulate fetching from a file (or use an API later)
    setEvents(eventsData.events);
  }, []);

  return (
    <div className="overflow-hidden p-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Upcoming Church Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 200} // Delay animation for staggered effect
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
          >
            <img src={event.image} alt={event.title} className="w-full h-30 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-purple-700">{event.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-600 text-sm sm:text-base"><strong>Time:</strong> {event.time}</p>
              <p className="text-gray-600 text-sm sm:text-base"><strong>Location:</strong> {event.location}</p>
              <p className="text-gray-700 my-3 text-sm sm:text-base">{event.description}</p>
              <p className="text-xs sm:text-sm text-gray-500"><strong>Contact:</strong> {event.contact}</p>
              <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base">
                {event.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchEvents;
