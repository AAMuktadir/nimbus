import React from "react";
import { useState } from "react";
import SidebarDoctor from "../../components/doctor/global/sidebar";
import HeaderDoctor from "../../components/doctor/global/header";
import UpdateInfoFormDoctor from "../../components/doctor/profileUpdateFormDoctor";
import UpdatePasswordFormDoctor from "../../components/doctor/passwordUpdateForm";
import TitleDoctor from "../../components/doctor/global/title";

export default function DoctorAccount() {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <SidebarDoctor />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6]">
        <HeaderDoctor />

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
              <TitleDoctor title={"Personal Details"} />
              <UpdateInfoFormDoctor />
            </div>
          ) : (
            <div className="min-h-screen">
              <div className="bg-white rounded-lg sm:w-3/5 border border-[#B3B3B3]">
                <UpdatePasswordFormDoctor />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
