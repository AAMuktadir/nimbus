import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patient/dashboard";
import FindConsultant from "./pages/patient/find-consultant";
import Appointment from "./pages/patient/appointments";
import Home from "./pages/home";
import Mypage from "./pages/mypage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/find-consultant" element={<FindConsultant />} />
      <Route path="/patient/appointment" element={<Appointment />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
}

export default App;
