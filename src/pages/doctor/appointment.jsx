import React from "react";
import { useState } from "react";
import TitleDoctor from "../../components/doctor/global/title";
import SidebarDoctor from "../../components/doctor/global/sidebar";
import HeaderDoctor from "../../components/doctor/global/header";
import OngoingAppointmentCardDoctor from "../../components/doctor/ongointAppointmentCardDoctor";
import AllPatientsTable from "../../components/doctor/allPatientsTable";

export default function AppointmentDoctor() {
  const [showAllAppointments, setShowAllAppointments] = useState(true);
  const onGoing = [
    {
      id: 1,
      image: "/img/doctor-F.png",
      name: "Emma Watson",
      specialization: "Destist",
      date: "12 Jun 2024",
      time: "12:00 PM",
    },
    {
      id: 2,
      image: "/img/doctor-M.png",
      name: "Steve Smith",
      specialization: "Orthopedic",
      date: "12 Jun 2024",
      time: "12:00 PM",
    },
    {
      id: 3,
      image: "/img/doctor-M.png",
      name: "Mitchel Johnson",
      specialization: "Medicine",
      date: "12 Jun 2024",
      time: "12:00 PM",
    },

    {
      id: 4,
      image: "/img/doctor-M.png",
      name: "Muktadir",
      specialization: "Medicine",
      date: "12 Jun 2024",
      time: "12:00 PM",
    },
  ];

  const allPatient = [
    {
      id: 1,
      image: "/img/doctor-F.png",
      name: "Abcd Efg",
      problem: "Cavities",
      tookService: 10,
    },
    {
      id: 2,
      image: "/img/doctor-M.png",
      name: "Hijk Lmnop",
      problem: "Cavities",
      tookService: 10,
    },
    {
      id: 3,
      image: "/img/doctor-M.png",
      name: "Lionel Messi",
      problem: "Cavities",
      tookService: 10,
    },

    {
      id: 4,
      image: "/img/doctor-M.png",
      name: "CR7",
      problem: "Cavities",
      tookService: 10,
    },

    {
      id: 5,
      image: "/img/doctor-F.png",
      name: "Jeniffer",
      problem: "Cavities",
      tookService: 10,
    },
  ];

  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <SidebarDoctor />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6] h-full">
        <HeaderDoctor />

        <div className="h-full p-4 sm:p-8">
          <div className="flex gap-6 pb-12">
            <button
              className={`text-[18px] font-bold p-2 bg-white rounded-lg cursor-pointer ${
                showAllAppointments ? "text-black" : "text-[#007055]"
              }`}
              onClick={() => setShowAllAppointments(false)}
            >
              Ongoing Appointment
            </button>

            <button
              className={`text-[18px] font-bold p-2 bg-white rounded-lg cursor-pointer ${
                showAllAppointments ? "text-[#007055]" : "text-black"
              }`}
              onClick={() => setShowAllAppointments(true)}
            >
              All Appointment
            </button>
          </div>

          {showAllAppointments ? (
            <div className="bg-white px-8 rounded-xl pb-8">
              <section className="py-5">
                <TitleDoctor title={`${allPatient.length} Appointed`} />
              </section>
              <AllPatientsTable patients={allPatient} />
            </div>
          ) : (
            <div className="">
              <section className="py-5">
                <TitleDoctor title={`You have ${onGoing.length} Appointment`} />
              </section>

              <div className="flex justify-center flex-wrap">
                {onGoing.map((appointments) => (
                  <OngoingAppointmentCardDoctor
                    key={appointments.id}
                    appointments={appointments}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
