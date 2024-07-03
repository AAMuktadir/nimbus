import React from "react";
import { MdNotifications } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-end px-8 py-4 gap-6 text-[24px]">
      <MdNotifications />
      <MdAccountCircle />
    </div>
  );
}
