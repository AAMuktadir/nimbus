import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-20">
      <section className="">
        <h4 className="text-4xl font-bold">Welcome to Nimbus Application.</h4>
      </section>

      <div className="flex items-center justify-center gap-8">
        <button className="text-white px-4 py-2 hover:bg-[#007055] duration-300 bg-black rounded-lg">
          <Link to="/patient/dashboard">Patient</Link>
        </button>

        <button className="text-white px-4 py-2 hover:bg-[#007055] duration-300 bg-black rounded-lg">
          <Link to="/doctor/dashboard">Doctor</Link>
        </button>
      </div>
    </div>
  );
}
