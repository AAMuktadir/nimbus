import React, { useState } from "react";

export default function UpdateInfoForm() {
  const [formData, setFormData] = useState({
    name: "AA Muktadir",
    email: "muktadir@email.com",
    phone: "+88 017 XXX XXXXX",
    gender: "Male",
    bloodGroup: "A+",
    address: "Uttara, Dhaka",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle the form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white px-0 sm:px-4 py-8 rounded-lg"
    >
      {Object.entries(formData).map(([key, value]) => (
        <div className="mb-4 flex items-center">
          <label
            htmlFor={key}
            className="block text-sm sm:text-[20px] font-bold text-[#141921] w-1/3"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <input
            type={key === "email" ? "email" : "text"}
            id={key}
            name={key}
            value={value}
            onChange={handleChange}
            className="mt-1 text-sm sm:text-[20px] block w-2/3 px-3 py-2 bg-[#F9F9F9] border-gray-300 sm:text-sm rounded-lg"
          />
        </div>
      ))}

      <div className="py-4"></div>

      <div className="py-6 border-t border-[#B3B3B3] flex justify-end">
        <button
          type="submit"
          className="py-2 px-4 rounded-lg shadow-sm text-sm sm:text-[18px] font-medium text-white bg-[#007055] hover:bg-green-500 duration-300"
        >
          Save & Changes
        </button>
      </div>
    </form>
  );
}
