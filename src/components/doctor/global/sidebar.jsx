import React, { useState } from "react";
import { MdDashboard, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SidebarDoctor() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full">
      {/* Mobile Menu Button */}
      <div className="flex items-center justify-between bg-[#0D0E12] p-4 md:hidden">
        <MdMenu className="text-white text-3xl" onClick={toggleSidebar} />
        <img src="/Logo.png" alt="logo" height="50" width="50" />
      </div>

      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-2/3 bg-[#0D0E12] h-full z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-full`}
      >
        <div className="p-6 hidden md:block">
          <img src="/Logo.png" height={100} width={100} alt="logo" />
        </div>
        <div className="p-6 md:hidden">
          <MdClose
            className="text-white text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        <div className="px-6 pb-6">
          <p className="border-dashed border-t border-[#909090]"></p>
        </div>

        <div className="text-white text-[15px] font-bold px-6">
          {/* Navigation Links */}
          <NavigationLink
            icon={<MdDashboard />}
            path="/doctor/dashboard"
            text="Dashboard"
            location={location}
          />
          <NavigationLink
            icon={<AiOutlineSchedule />}
            path="/doctor/appointment"
            text="Appointment"
            location={location}
          />
        </div>
      </div>
    </div>
  );
}

function NavigationLink({ icon, path, text, location }) {
  return (
    <section
      className={`flex items-center gap-4 py-3 px-2 rounded-lg ${
        location.pathname === path && "bg-[#1C1C21]"
      }`}
    >
      <p className="text-[16px]">{icon}</p>
      <h4>
        <Link to={path}>{text}</Link>
      </h4>
    </section>
  );
}
