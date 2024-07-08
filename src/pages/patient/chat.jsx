import React from "react";
import ChatComponent from "../../components/patient/chatComponent";
import PatientLayout from "../../layouts/patientLayout";

export default function Chat() {
  return (
    <PatientLayout>
      <div className="w-full h-screen">
        <ChatComponent />
      </div>
    </PatientLayout>
  );
}
