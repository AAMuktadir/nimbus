import React from "react";
import { useState } from "react";
import UpdateInfoForm from "../../components/patient/profileUpdateForm";
import UpdatePasswordForm from "../../components/patient/passwordUpdateForm";
import Title from "../../components/patient/global/title";
import PatientLayout from "../../layouts/patientLayout";

export default function PatientProfile() {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <PatientLayout>
      <div className="p-4 sm:p-8">
        <div className="flex gap-6 pb-12">
          <button
            className={`text-[18px] font-bold p-2 bg-white rounded-lg cursor-pointer ${
              showProfile ? "text-[#007055]" : "text-black"
            }`}
            onClick={() => setShowProfile(true)}
          >
            Profile
          </button>

          <button
            className={`text-[18px] font-bold p-2 bg-white rounded-lg cursor-pointer ${
              showProfile ? "text-black" : "text-[#007055]"
            }`}
            onClick={() => setShowProfile(false)}
          >
            Change Password
          </button>
        </div>

        {showProfile ? (
          <div className="bg-white p-4 sm:p-8 sm:w-3/5 rounded-lg border border-[#B3B3B3]">
            <Title title={"Personal Details"} />
            <UpdateInfoForm />
          </div>
        ) : (
          <div className="min-h-screen">
            <div className="bg-white rounded-lg sm:w-3/5 border border-[#B3B3B3]">
              <UpdatePasswordForm />
            </div>
          </div>
        )}
      </div>
    </PatientLayout>
  );
}
