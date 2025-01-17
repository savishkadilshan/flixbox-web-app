'use client';

import { usePathname, useRouter } from "next/navigation";
import { FiGrid, FiLogOut } from "react-icons/fi";
import { adminLogout } from "@/app/_actions/logout";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { name: "Dashboard", route: "/admin", icon: FiGrid },
    { name: "All Games", route: "/admin/all-games", icon: FiGrid },
  ];

  return (
    <div className="h-screen w-64 bg-gray-200 text-black flex flex-col shadow-lg fixed">
      {/* System Name */}
      <div className="py-6 px-4 bg-orange-600 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white">FlixBox</h1>
      </div>

      {/* Navigation Tabs */}
      <nav className="flex-1 mt-6">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.route}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                pathname === tab.route
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-300"
              } transition duration-300`}
              onClick={() => router.push(tab.route)}
            >
              <tab.icon className="text-lg mr-3" />
              <span>{tab.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sign Out Option */}
      <form action={adminLogout}>
        <button
          type="submit"
          className="w-full mt-auto px-4 py-3 cursor-pointer flex items-center hover:bg-red-600 hover:text-white transition duration-300"
        >
          <FiLogOut className="text-lg mr-3" />
          <span>Sign Out</span>
        </button>
      </form>
    </div>
  );
}
