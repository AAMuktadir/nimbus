import React from "react";
import { useState, useEffect, useRef } from "react";
import { MdNotifications } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HeaderDoctor() {
  const location = useLocation();
  const user = {
    name: "AA Muktadir",
    image: "/img/Cartoon.png",
  };

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="flex items-center justify-end px-8 py-4 gap-6 text-[24px]">
        <MdNotifications />

        <div className="cursor-pointer" onClick={() => toggleModal(true)}>
          <div className="w-7 h-7">
            <img
              src={user.image}
              alt={user.name}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          className="absolute top-10 right-10 mt-2 mr-2 bg-white shadow-lg rounded"
        >
          <section className="h-1/2 flex items-center p-6 gap-3">
            <div className="w-10 h-10">
              <img
                src={user.image}
                alt={user.name}
                className="object-cover rounded-2xl"
              />
            </div>

            <p className="text-[18px] font-bold">{user.name}</p>
          </section>
          <section className="h-1/2 border-t border-[#B3B3B3] p-6 flex flex-col items-start gap-2 text-[18px]">
            <button
              className={`hover:font-bold duration-100 ${
                location.pathname === "/doctor/profile" &&
                "font-bold text-[#007055]"
              }`}
            >
              <Link to="/doctor/profile">Profile</Link>
            </button>
            <button
              className={`hover:font-bold duration-100 ${
                location.pathname === "/doctor/account" &&
                "font-bold text-[#007055]"
              }`}
            >
              <Link to="/doctor/account">Accounts</Link>
            </button>
            <button className="hover:font-bold hover:text-red-500 duration-100">
              <Link to="/">Sign Out</Link>
            </button>
          </section>
        </div>
      )}
    </>
  );
}
