import React, { useState } from "react";

export default function UpdatePasswordForm() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password Updated:", formData.newPassword);
    // Implement password update logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8">
      <div className="mb-6">
        <label
          htmlFor="currentPassword"
          className="block text-sm font-bold sm:text-[20px]  text-[#141921] pb-2"
        >
          Current Password
        </label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-[#F9F9F9] sm:text-sm rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="newPassword"
          className="block text-sm font-bold sm:text-[20px]  text-[#141921] pb-2"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-[#F9F9F9] sm:text-sm rounded-lg"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-bold sm:text-[20px]  text-[#141921] pb-2"
        >
          Confirm New Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-[#F9F9F9] sm:text-sm rounded-lg"
        />
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          className="py-2 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-[#007055] hover:bg-green-500 duration-300"
        >
          Update Password
        </button>
      </div>
    </form>
  );
}
