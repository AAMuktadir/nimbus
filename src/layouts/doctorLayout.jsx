import React from "react";
import SidebarDoctor from "../components/doctor/global/sidebar";
import HeaderDoctor from "../components/doctor/global/header";

export default function DoctorLayout({ children }) {
  return (
    <div className="w-full sm:flex min-h-screen">
      <div className="sm:w-1/5 sm:min-h-screen">
        <SidebarDoctor />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6] flex flex-col min-h-screen">
        <HeaderDoctor />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
