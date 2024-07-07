import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import TitleDoctor from "../../components/doctor/global/title";
import SidebarDoctor from "../../components/doctor/global/sidebar";
import HeaderDoctor from "../../components/doctor/global/header";

export default function DoctorDashboard() {
  const appointment1 = 6;
  const appointment2 = 74;
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <SidebarDoctor />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6]">
        <HeaderDoctor />

        <div className="p-8 h-screen ">
          <TitleDoctor title={"Dashboard"} />

          <div className="flex flex-col sm:flex-row w-full py-8 gap-4">
            <section className="bg-[#007055] sm:w-2/5 p-8 rounded-lg text-white">
              <p className="text-4xl">
                <AiOutlineSchedule />
              </p>

              <p className="text-6xl py-4">{appointment1}</p>
              <p className="text-2xl font-light">Ongoing Schedule</p>
            </section>

            <section className="bg-[#D3E4E1] sm:w-2/5 p-8 rounded-lg text-[#007055]">
              <p className="text-4xl">
                <AiOutlineSchedule />
              </p>

              <p className="text-6xl py-4">{appointment2}</p>
              <p className="text-2xl font-light">Total Appointed</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
