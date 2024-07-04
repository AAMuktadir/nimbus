import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patient/dashboard";
import FindConsultant from "./pages/patient/find-consultant";
import Appointment from "./pages/patient/appointments";
import Home from "./pages/home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/find-consultant" element={<FindConsultant />} />
        <Route path="/patient/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
