import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoChatbubble } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
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
            location.pathname === "/patient/dashboard" && "bg-[#1C1C21]"
          }`}
        >
          <p className="text-[16px]">
            <MdDashboard />
          </p>

          <h4>
            <a href="/patient/dashboard">Dashboard</a>
          </h4>
        </section>

        <section className="flex items-center gap-4 py-3 px-2 rounded-lg">
          <p className="text-[16px]">
            <IoChatbubble />
          </p>

          <h4>Chat</h4>
        </section>

        <section
          className={`flex items-center gap-4 py-3 px-2  rounded-lg ${
            location.pathname === "/patient/find-consultant" && "bg-[#1C1C21]"
          }`}
        >
          <p className="text-[16px]">
            <FaSearch />
          </p>

          <h4>
            <a href="/patient/find-consultant">Find Consultant</a>
          </h4>
        </section>

        <section
          className={`flex items-center gap-4 py-3 px-2  rounded-lg ${
            location.pathname === "/patient/appointment" && "bg-[#1C1C21]"
          }`}
        >
          <p className="text-[16px]">
            <AiOutlineSchedule />
          </p>

          <h4>
            <a href="/patient/appointment">Appointment</a>
          </h4>
        </section>
      </div>
    </div>
  );
}
