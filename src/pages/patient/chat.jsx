import React from "react";
import Sidebar from "../../components/patient/global/sidebar";
import Header from "../../components/patient/global/header";

export default function Chat() {
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <Sidebar />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6]">
        <Header />

        <div className="p-8 flex items-center justify-center h-screen">
          <h4 className="text-3xl font-bold">This is Chat Page</h4>
        </div>
      </div>
    </div>
  );
}
