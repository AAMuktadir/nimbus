import React from "react";

export default function AllDoctorTable({ doctors }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white h-full">
        <thead className="">
          <tr className="text-left text-[18px]">
            <th className="py-2 pr-4">Consultant</th>
            <th className="py-2 px-4">Service Name</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Reviews</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((appointment) => (
            <tr key={appointment.id}>
              <td className="flex items-center py-2">
                <img
                  src={appointment.image}
                  alt={appointment.name}
                  className="w-10 h-10 rounded-lg mr-4"
                />
                <div>
                  <div className="font-medium">{appointment.name}</div>
                  <div className="text-sm text-gray-500">
                    {appointment.specialization}
                  </div>
                </div>
              </td>
              <td className="py-2 px-4">Cavities</td>
              <td className="py-2 px-4">{appointment.date}</td>
              <td className="py-2 px-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < appointment.reviews
                          ? "text-[#007055]"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.41l6.564-.955L10 0l2.948 5.455 6.564.955-4.756 4.135 1.122 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2">{appointment.reviews}/5</span>
                </div>
              </td>
              <td className="py-2 px-4">
                <button className="bg-gray-100 text-gray-700 py-1 px-3 rounded hover:bg-[#007055] duration-300 hover:text-white">
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
