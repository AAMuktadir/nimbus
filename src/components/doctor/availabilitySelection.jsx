import React, { useState } from "react";

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

function TimeSelectionComponent() {
  const [times, setTimes] = useState({
    Saturday: { start: "12:00", end: "14:00" },
    Sunday: { start: "12:00", end: "14:00" },
    Monday: { start: "12:00", end: "14:00" },
    Tuesday: { start: "12:00", end: "14:00" },
    Wednesday: { start: "12:00", end: "14:00" },
    Thursday: { start: "12:00", end: "14:00" },
    Friday: { start: "12:00", end: "14:00" },
  });

  const handleTimeChange = (day, type, value) => {
    setTimes((prev) => ({
      ...prev,
      [day]: { ...prev[day], [type]: value },
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Times:", times);
  };

  return (
    <div className="max-w-sm mx-auto p-4  sm:p-8">
      <div className="text-[18px] sm:text-[24px] font-bold mb-5 text-center">
        Set Availability
      </div>
      {days.map((day) => (
        <div key={day} className="my-4">
          <div className="text-[16px] font-bold">{day}</div>

          <section className="flex items-center justify-center">
            <input
              type="time"
              className="bg-[#F9F9F9] font-semibold text-[#656565] rounded-lg px-3 py-2"
              value={times[day].start}
              onChange={(e) => handleTimeChange(day, "start", e.target.value)}
            />
            <span className="mx-2 text-[14px]">to</span>
            <input
              type="time"
              className="bg-[#F9F9F9] font-semibold text-[#656565] rounded-lg px-3 py-2"
              value={times[day].end}
              onChange={(e) => handleTimeChange(day, "end", e.target.value)}
            />
          </section>
        </div>
      ))}
      <button
        className="w-full py-2 bg-[#007055] text-white rounded-lg mt-4 hover:bg-green-700"
        onClick={handleSubmit}
      >
        Apply
      </button>
    </div>
  );
}

export default TimeSelectionComponent;
