import React from "react";
import { useState } from "react";
import DoctorCard from "../../components/patient/doctorCard";
import Title from "../../components/patient/global/title";
import AllDoctorTable from "../../components/patient/allDoctorsTable";
import Sidebar from "../../components/patient/global/sidebar";
import Header from "../../components/patient/global/header";

export default function Appointment() {
  const [showAllAppointments, setShowAllAppointments] = useState(true);
  const onGoing = [
    {
      id: 1,
      image: "/img/doctor-F.png",
      name: "Emma Watson",
      specialization: "Destist",
      reviews: 5,
      totalReviews: 74,
    },
    {
      id: 2,
      image: "/img/doctor-M.png",
      name: "Steve Smith",
      specialization: "Orthopedic",
      reviews: 5,
      totalReviews: 74,
    },
    {
      id: 3,
      image: "/img/doctor-M.png",
      name: "Mitchel Johnson",
      specialization: "Medicine",
      reviews: 5,
      totalReviews: 74,
    },
  ];

  const allAppointment = [
    {
      id: 1,
      image: "/img/doctor-F.png",
      name: "Abcd Efg",
      specialization: "Destist",
      date: "11/6/2024",
      reviews: 5,
      totalReviews: 74,
    },
    {
      id: 2,
      image: "/img/doctor-M.png",
      name: "Hijk Lmnop",
      specialization: "Orthopedic",
      date: "11/6/2024",
      reviews: 5,
      totalReviews: 74,
    },
    {
      id: 3,
      image: "/img/doctor-M.png",
      name: "Lionel Messi",
      specialization: "Medicine",
      date: "11/6/2024",
      reviews: 5,
      totalReviews: 74,
    },

    {
      id: 4,
      image: "/img/doctor-M.png",
      name: "CR7",
      specialization: "Medicine",
      date: "11/6/2024",
      reviews: 5,
      totalReviews: 74,
    },

    {
      id: 5,
      image: "/img/doctor-F.png",
      name: "Jeniffer",
      specialization: "Destist",
      date: "11/6/2024",
      reviews: 3,
      totalReviews: 74,
    },
  ];

  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <Sidebar />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6]">
        <Header />

        <div className="h-screen p-8 ">
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
                <Title title={`${allAppointment.length} Appointment`} />
              </section>
              <AllDoctorTable doctors={allAppointment} />
            </div>
          ) : (
            <div className="">
              <section className="py-5">
                <Title title={`You have ${onGoing.length} Appointment`} />
              </section>

              <div className="flex justify-center flex-wrap">
                {onGoing.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
