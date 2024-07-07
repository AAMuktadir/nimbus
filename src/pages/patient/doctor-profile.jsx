import React from "react";
import Sidebar from "../../components/patient/global/sidebar";
import Header from "../../components/patient/global/header";
import AppointmentBooker from "../../components/patient/booking/dateAndTimeBooker";

export default function DoctorProfilePatient() {
  const doctor = {
    name: "Mohamed Salah",
    image: "/img/Cartoon.png",
    speciality: "Cardiologist",
    department: "Cardiology",
    rating: 4,
    totalRating: 66,
    biography:
      "Dr. John Smith is a highly experienced general dentist dedicated to providing comprehensive dental care. Doctor of Dental Surgery (DDS) from Harvard School of Dental Medicine.",
    specialization:
      "Urologic, Medicine, Surgery, Retina Specialist, Hepatology",
    qualifications: "MBBS, BDS, MS",
    yearsOfExperience: 8,
  };

  return (
    <div className="w-full sm:flex h-full">
      <div className="sm:w-1/5 min-h-full">
        <Sidebar />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6] h-full">
        <Header />

        <div className="h-full w-full p-4 sm:p-8 sm:flex items-start gap-8">
          <section className="sm:w-3/4">
            <div className="bg-white flex items-center justify-start gap-6 p-4 sm:p-8 rounded-lg">
              <div className="">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  height={180}
                  width={180}
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="">
                <h3 className="text-[30px] font-bold">{doctor.name}</h3>
                <p className="text-[16] py-2">{doctor.speciality}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < doctor.rating ? "text-[#008A73]" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.41l6.564-.955L10 0l2.948 5.455 6.564.955-4.756 4.135 1.122 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2">({doctor.totalRating})</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-4 sm:p-8 mb-8 rounded-lg">
              <h2 className="text-xl sm:text-[34px] font-bold pb-2">
                Biography
              </h2>
              <p className="text-sm sm:text-[18px] pb-4">{doctor.biography}</p>

              <h2 className="text-lg sm:text-[24px] font-bold pb-1 sm:pb-2">
                Department
              </h2>
              <p className="text-sm sm:text-[18px] pb-4">{doctor.department}</p>

              <h2 className="text-lg sm:text-[24px] font-bold pb-1 sm:pb-2">
                Specialization
              </h2>
              <p className="text-sm sm:text-[18px] pb-4">
                {doctor.specialization}
              </p>

              <h2 className="text-lg sm:text-[24px] font-bold pb-1 sm:pb-2">
                Qualifications
              </h2>
              <p className="text-sm sm:text-[18px] pb-4">
                {doctor.qualifications}
              </p>

              <h2 className="text-lg sm:text-[24px] font-bold pb-1 sm:pb-2">
                Years of Experience
              </h2>
              <p className="text-sm sm:text-[18px] pb-4">
                {doctor.yearsOfExperience} Years
              </p>
            </div>
          </section>
          <section className="sm:w-1/4 bg-white px-6 rounded-lg">
            <AppointmentBooker />
          </section>
        </div>
      </div>
    </div>
  );
}
