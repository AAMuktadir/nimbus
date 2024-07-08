import React, { useState } from "react";

export default function ChatUI() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    console.log("Message sent:", inputText); // Implement message sending logic
    setInputText("");
  };

  return (
    <div className="bg-white max-w-2xl mx-auto rounded-lg shadow overflow-hidden h-full flex flex-col justify-end">
      <div className="p-2 sm:p-8 space-y-4">
        <div className="flex flex-col gap-4 justify-end h-full text-sm sm:text-[14px] font-bold">
          <div className="bg-[#D3E4E1] rounded-lg p-3 max-w-xs self-start">
            Good morning, Mrs. Smith. How are you feeling today?
          </div>
          <div className="bg-[#7AAFA6] rounded-lg p-3 max-w-xs self-end">
            Good morning, Doctor. I'm feeling okay, just here for my regular
            check-up.
          </div>
          <div className="bg-[#D3E4E1] rounded-lg p-3 max-w-xs self-start">
            Great to hear. Have you had any new symptoms or health concerns
            since your last visit?
          </div>
          <div className="bg-[#7AAFA6] rounded-lg p-3 max-w-xs self-end">
            Not really, but I've been feeling a bit more tired than usual.
          </div>
          <div className="bg-[#D3E4E1] rounded-lg p-3 max-w-xs self-start">
            <div className="flex items-center">
              <img
                src="/img/doctor-F.png"
                alt="Emma Smith"
                className="h-12 w-12 rounded-xl mr-2"
              />
              <div className="">
                <p className="font-bold text-[18px]">Emma Smith</p>
                <p className="text-[14px] font-normal">Dentist</p>
              </div>

              <button className="ml-4 bg-[#007055] hover:bg-green-400 text-white font-bold p-2 rounded">
                Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 p-4 flex space-x-2">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type a message"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-[#007055] text-white rounded-lg px-6 py-2 focus:outline-none hover:bg-green-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
