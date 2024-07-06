import React from "react";

import { useState } from "react";
import Sidebar from "../../components/patient/global/sidebar";
import Header from "../../components/patient/global/header";

export default function PatientProfile() {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <Sidebar />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6]">
        <Header />

        <div className="p-8 h-screen ">
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
        </div>
      </div>
    </div>
  );
}
