import React from "react";
import Sidebar from "../components/patient/global/sidebar";
import Header from "../components/patient/global/header";

export default function PatientLayout({ children }) {
  return (
    <div className="w-full sm:flex min-h-screen">
      <div className="sm:w-1/5 min-h-screen">
        <Sidebar />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6] flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
