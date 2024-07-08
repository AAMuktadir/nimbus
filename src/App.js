import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientDashboard from "./pages/patient/dashboard";
import FindConsultant from "./pages/patient/find-consultant";
import Appointment from "./pages/patient/appointments";
import Home from "./pages/home";
import DoctorProfilePatient from "./pages/patient/doctor-profile";
import PatientProfile from "./pages/patient/patient-account";
import Chat from "./pages/patient/chat";
import AppointmentDoctor from "./pages/doctor/appointment";

import DoctorDashboard from "./pages/doctor/dashboard";
import DoctorAccount from "./pages/doctor/doctor-account";
import DoctorProfileDoctor from "./pages/doctor/doctor-profile";
import DoctorVerification from "./pages/doctor/doctor-verification";
import AuthPage from "./pages/auth-page";

function App() {
  return (
    <Routes>
      <Route path="/auth-page" element={<AuthPage />} />
      {/* Patient routes */}

      <Route path="/" element={<Home />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/patient/find-consultant" element={<FindConsultant />} />
      <Route path="/patient/appointment" element={<Appointment />} />
      <Route
        path="/patient/doctor-profile"
        element={<DoctorProfilePatient />}
      />
      <Route path="/patient/patient-account" element={<PatientProfile />} />
      <Route path="/patient/chat" element={<Chat />} />

      {/* Doctor Routes */}

      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/appointment" element={<AppointmentDoctor />} />
      <Route path="/doctor/account" element={<DoctorAccount />} />
      <Route path="/doctor/profile" element={<DoctorProfileDoctor />} />

      <Route path="/doctor/verification" element={<DoctorVerification />} />
    </Routes>
  );
}

export default App;
