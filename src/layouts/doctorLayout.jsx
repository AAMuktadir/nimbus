import React from "react";
import SidebarDoctor from "../components/doctor/global/sidebar";
import HeaderDoctor from "../components/doctor/global/header";

export default function DoctorLayout({ children }) {
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <SidebarDoctor />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6]">
        <HeaderDoctor />
        {children}
      </div>
    </div>
  );
}
