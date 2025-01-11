'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiGrid, FiLogOut } from "react-icons/fi";
import { adminLogout } from "@/app/_actions/logout";

export default function Sidebar() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All Games");

  return (
    <div className="h-screen w-64 bg-gray-900 text-gray-200 flex flex-col shadow-lg">
      {/* System Name */}
      <div className="py-6 px-4 bg-orange-600 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">FlixBox</h1>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex-1 mt-6">
        <ul>
          <li
            className="flex items-center px-4 py-3 my-1 cursor-pointer bg-orange-500 text-white"
            onClick={() => {
              router.push("/admin");
            }}
          >
            <FiGrid className="text-lg mr-3" />
            <span>Dashboard</span>
          </li>
          <li
            className={`flex items-center px-4 py-3 cursor-pointer ${activeTab === "All Games" ? "bg-orange-500 text-white" : "hover:bg-gray-800"
              } transition duration-300`}
            onClick={() => {
              setActiveTab("All Games");
              router.push("/admin/all-games");
            }}
          >
            <FiGrid className="text-lg mr-3" />
            <span>All Games</span>
          </li>
        </ul>
      </nav>

      {/* Sign Out Option */}
      <form action={adminLogout}>
        <button
          type="submit"
          className="w-full mt-auto px-4 py-3 cursor-pointer flex items-center hover:bg-red-600 transition duration-300"
        >
          <FiLogOut className="text-lg mr-3" />
          <span>Sign Out</span>
        </button>
      </form>
    </div>
  );
}
