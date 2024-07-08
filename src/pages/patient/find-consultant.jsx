import React from "react";
import Title from "../../components/patient/global/title";
import FilterForm from "../../components/patient/filter";
import DoctorCard from "../../components/patient/doctorCard";
import PatientLayout from "../../layouts/patientLayout";

export default function FindConsultant() {
  const doctors = [
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

  return (
    <PatientLayout>
      <div className="p-4 sm:p-8 ">
        <Title title={"Dentist"} />

        <FilterForm />

        <div className="">
          <div className="flex justify-center flex-wrap">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </PatientLayout>
  );
}
