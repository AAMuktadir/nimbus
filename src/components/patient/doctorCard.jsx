import React from "react";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white shadow-lg rounded-lg m-4 w-64">
      <section className="px-20 py-4">
        <img
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          className="w-full object-cover rounded-full"
        />
      </section>

      <div className="mt-0">
        <h5 className="text-lg font-bold text-center">{doctor.name}</h5>
        <p className="text-sm text-gray-500 text-center">
          {doctor.specialization}
        </p>

        <div className="flex items-center justify-center w-full pt-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < doctor.reviews ? "text-[#008A73]" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.41l6.564-.955L10 0l2.948 5.455 6.564.955-4.756 4.135 1.122 6.545z" />
            </svg>
          ))}
          <span className="ml-2">({doctor.totalReviews})</span>
        </div>
      </div>

      <div className="text-center py-4">
        <button className="py-2 px-4 bg-[#F6F6F6] rounded-lg hover:bg-[#007055] duration-700">
          Book
        </button>
      </div>
    </div>
  );
}
