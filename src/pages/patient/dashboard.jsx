import React from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import Title from "../../components/patient/global/title";
import PatientLayout from "../../layouts/patientLayout";

export default function PatientDashboard() {
  const appointment1 = 6;
  const appointment2 = 74;
  return (
    <PatientLayout>
      <div className="p-8 h-screen ">
        <Title title={"Dashboard"} />

        <div className="flex flex-col sm:flex-row w-full py-8 gap-4">
          <section className="bg-[#007055] sm:w-2/5 p-8 rounded-lg text-white">
            <p className="text-4xl">
              <AiOutlineSchedule />
            </p>

            <p className="text-6xl py-4">{appointment1}</p>
            <p className="text-2xl font-light">Ongoing Appointment</p>
          </section>

          <section className="bg-[#D3E4E1] sm:w-2/5 p-8 rounded-lg text-[#007055]">
            <p className="text-4xl">
              <AiOutlineSchedule />
            </p>

            <p className="text-6xl py-4">{appointment2}</p>
            <p className="text-2xl font-light">Ongoing Appointment</p>
          </section>
        </div>
      </div>
    </PatientLayout>
  );
}
