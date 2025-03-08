import React from "react";

const services = [
  { id: 1, name: "Car Repair", date: "March 15, 2025", time: "10:00 AM" },
  { id: 2, name: "Home Cleaning", date: "March 18, 2025", time: "2:00 PM" },
  { id: 3, name: "Plumbing Service", date: "March 22, 2025", time: "11:30 AM" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Upcoming Services</h2>
        <ul>
          {services.map((service) => (
            <li
              key={service.id}
              className="flex justify-between items-center p-4 border-b border-gray-200"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
                <p className="text-sm text-gray-500">
                  {service.date} at {service.time}
                </p>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                Book Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
