import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export default function SidebarDoctor() {
  const location = useLocation();
  return (
    <div className="w-full bg-[#0D0E12] h-full">
      <div className="p-6">
        <img src="/Logo.png" alt="logo" height="100" width="100" className="" />
      </div>

      <div className="px-6 pb-6">
        <p className="border-dashed border-t border-[#909090]"></p>
      </div>

      <div className="text-white text-[15px] font-bold px-6">
        <section
          className={`flex items-center gap-4 py-3 px-2 rounded-lg ${
            location.pathname === "/doctor/dashboard" && "bg-[#1C1C21]"
          }`}
        >
          <p className="text-[16px]">
            <MdDashboard />
          </p>

          <h4>
            <a href="/doctor/dashboard">Dashboard</a>
          </h4>
        </section>

        <section
          className={`flex items-center gap-4 py-3 px-2  rounded-lg ${
            location.pathname === "/doctor/appointment" && "bg-[#1C1C21]"
          }`}
        >
          <p className="text-[16px]">
            <AiOutlineSchedule />
          </p>

          <h4>
            <a href="/doctor/appointment">Appointment</a>
          </h4>
        </section>
      </div>
    </div>
  );
}
