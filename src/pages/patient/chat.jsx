import React from "react";
import Sidebar from "../../components/patient/global/sidebar";
import Header from "../../components/patient/global/header";
import ChatComponent from "../../components/patient/chatComponent";

export default function Chat() {
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5 min-h-full">
        <Sidebar />
      </div>

      <div className="sm:w-4/5 bg-[#F6F6F6] h-full">
        <Header />

        <div className="w-full h-screen">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}
