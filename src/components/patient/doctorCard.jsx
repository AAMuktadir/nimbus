import React from "react";

export default function DoctorCard({ doctor }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64">
      <img
        src={doctor.image}
        alt={`Dr. ${doctor.name}`}
        className="w-full object-cover rounded-full p-12"
      />
      <div className="mt-4">
        <h5 className="text-lg font-bold text-center">{doctor.name}</h5>
        <p className="text-sm text-gray-500 text-center">
          {doctor.specialization}
        </p>
        <div className="mt-2 text-center">
          <span className="text-sm font-semibold text-center">
            {doctor.reviews} / 5
          </span>{" "}
          from
          <span className="text-sm text-gray-600">
            {" "}
            {doctor.totalReviews} reviews
          </span>
        </div>
      </div>
    </div>
  );
}
