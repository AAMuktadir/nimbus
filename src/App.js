import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patient/dashboard";
import Sidebar from "./components/patient/global/sidebar";
import Header from "./components/patient/global/header";
import FindConsultant from "./pages/patient/find-consultant";

function App() {
  return (
    <div className="w-full sm:flex">
      <div className="sm:w-1/5">
        <Sidebar />
      </div>

      <div className="sm:w-4/5">
        <Header />
        <Routes>
          <Route path="/" element={<PatientDashboard />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />

          <Route path="/patient/find-consultant" element={<FindConsultant />} />

          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
