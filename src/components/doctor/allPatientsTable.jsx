import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function AllPatientsTable({ patients }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white h-full">
        <thead className="">
          <tr className="text-left text-[18px]">
            <th className="py-2 pr-4">Patient</th>
            <th className="py-2 px-4">Problem</th>
            <th className="py-2 px-4">Took Service</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="flex items-center py-2">
                <img
                  src={patient.image}
                  alt={patient.name}
                  className="w-10 h-10 rounded-lg mr-4"
                />
                <div>
                  <div className="font-medium">{patient.name}</div>
                </div>
              </td>

              <td className="py-2 px-4">{patient.problem}</td>
              <td className="py-2 px-4">{patient.tookService}</td>

              <td className="py-2 px-4">
                <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded hover:bg-red-500 duration-300 hover:text-white text-xl">
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
