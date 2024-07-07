import React, { useState } from "react";

export default function DoctorVerification() {
  const [formData, setFormData] = useState({
    biography: "",
    department: "",
    specialization: "",
    qualifications: "",
    yearsOfExperience: "",
    bmdcRegistrationNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-[#F6F6F6] h-screen py-8 sm:py-12 px-4 sm:px-0">
      <div className="max-w-md mx-auto p-4 sm:p-10 bg-white rounded-xl shadow">
        <div className="font-bold text-lg sm:text-[30px] mb-5">
          Verification
        </div>
        <textarea
          name="biography"
          placeholder="Biography"
          className="w-full p-2 bg-[#F9F9F9] rounded-lg mb-3"
          value={formData.biography}
          onChange={handleInputChange}
          rows="4"
        />
        <select
          name="department"
          className="w-full p-2 bg-[#F9F9F9] rounded-lg mb-3"
          value={formData.department}
          onChange={handleInputChange}
        >
          <option value="">Select Department</option>
          <option value="dept1">Department 1</option>
          <option value="dept2">Department 2</option>
        </select>
        <select
          name="specialization"
          className="w-full p-2 bg-[#F9F9F9] rounded-lg mb-3"
          value={formData.specialization}
          onChange={handleInputChange}
        >
          <option value="">Select Specialization</option>
          <option value="spec1">Specialization 1</option>
          <option value="spec2">Specialization 2</option>
        </select>
        <input
          type="text"
          name="qualifications"
          placeholder="Qualifications"
          className="w-full p-2 bg-[#F9F9F9] rounded-lg mb-3"
          value={formData.qualifications}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="yearsOfExperience"
          placeholder="Years of Experience"
          className="w-full p-2 bg-[#F9F9F9] rounded-lg mb-3"
          value={formData.yearsOfExperience}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="bmdcRegistrationNumber"
          placeholder="BMDC Registration number"
          className="w-full p-2 bg-[#F9F9F9] rounded-lg mb-3"
          value={formData.bmdcRegistrationNumber}
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-end">
          <button
            className="px-4 py-2 bg-[#007055] text-white text-[18px] font-bold rounded-xl hover:bg-green-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
