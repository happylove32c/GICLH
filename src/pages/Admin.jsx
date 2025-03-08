import React, { useState, useEffect } from "react";
import eventsData from "../../public/Posts.json"; // Adjust the path as needed

const Admin = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData.events);
  }, []);

  const handleUpdate = (id) => {
    alert(`Update post with ID: ${id}`);
  };

  const handleBlock = (id) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, blocked: !event.blocked } : event
      )
    );
  };

  const handleDelete = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-4 border rounded-lg shadow-md ${
              event.blocked ? "opacity-50" : ""
            }`}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
            <p className="text-sm text-gray-600">{event.location}</p>
            <p className="text-sm mt-2">{event.description}</p>
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => handleUpdate(event.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Update
              </button>
              <button
                onClick={() => handleBlock(event.id)}
                className={`${
                  event.blocked ? "bg-green-500" : "bg-yellow-500"
                } text-white px-3 py-1 rounded-md`}
              >
                {event.blocked ? "Unblock" : "Block"}
              </button>
              <button
                onClick={() => handleDelete(event.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
