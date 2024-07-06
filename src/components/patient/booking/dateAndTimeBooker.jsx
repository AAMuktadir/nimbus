import React, { useState } from "react";

const AppointmentBooker = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Generate time options
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 10; hour <= 16; hour++) {
      times.push(`${hour}:00`);
    }
    return times;
  };

  return (
    <div className="max-w-xs mx-auto py-6">
      <h3 className="text-[18px] font-bold text-center pb-4">
        Book Appoinment
      </h3>
      <div className="my-4">
        <label className="block text-black text-sm font-bold mb-2">
          Select Date
        </label>
        <input
          type="date"
          className="shadow bg-[#F6F6F6] rounded w-full py-2 px-3"
          value={selectedDate}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="mb-6">
        <label className="block text-black text-sm font-bold mb-2">
          Select Time
        </label>
        <select
          className="shadow bg-[#F6F6F6] rounded w-full py-2 px-3"
          value={selectedTime}
          onChange={handleTimeChange}
        >
          {generateTimeOptions().map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-[#007055] hover:bg-green-500 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="button"
      >
        Book
      </button>
    </div>
  );
};

export default AppointmentBooker;
