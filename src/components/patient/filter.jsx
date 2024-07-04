import React, { useState } from "react";
import Title from "./global/title";

export default function FilterForm() {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data, e.g., log it or send it to a server
    console.log({ name, specialization, qualifications, experience });
  };

  return (
    <div className="py-6">
      <Title title={"Filters"} />
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pt-4">
        <div className="flex justify-between items-end gap-4">
          <div className="flex-1">
            <label className="font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Jhon Done"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-md bg-[#F6F6F6]"
            />
          </div>
          <div className="flex-1 mt-2">
            <label className="font-medium">Specialization</label>
            <select
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-2 bg-[#F6F6F6] rounded-md "
            >
              <option value="">Select</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="font-medium">Qualifications</label>
            <select
              id="qualifications"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              className="w-full p-2 bg-[#F6F6F6] rounded-md"
            >
              <option value="">Select</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>
          <div className="flex-1 mt-2">
            <label className="font-medium">Experience</label>

            <input
              type="text"
              id="experience"
              placeholder=""
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full p-2 bg-[#F6F6F6] rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-[#007055] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}
