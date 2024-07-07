import React from "react";

export default function OngoingAppointmentCardDoctor({ appointments }) {
  return (
    <div className="bg-white shadow-lg rounded-lg m-4 w-64">
      <section className="px-20 py-4">
        <img
          src={appointments.image}
          alt={`Dr. ${appointments.name}`}
          className="w-full object-cover rounded-full"
        />
      </section>

      <div className="mt-0">
        <h5 className="text-lg font-bold text-center">{appointments.name}</h5>
        <p className="text-sm text-[#0D0E12] text-center">
          {appointments.specialization}
        </p>
      </div>

      <div className="flex text-[16px] py-4 items-center justify-center gap-2">
        <p>{appointments.date}</p>
        <p>{appointments.time}</p>
      </div>

      <div className="text-center py-4">
        <button className="py-2 px-4 bg-[#F6F6F6] rounded-lg hover:bg-[#007055] duration-700">
          Approve
        </button>
      </div>

      <div className="text-center pb-4">
        <button className="py-2 px-4 bg-[#F6F6F6] rounded-lg hover:bg-[#dbc940] duration-700">
          Reschedule
        </button>
      </div>
    </div>
  );
}
