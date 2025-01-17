"use client";

import Sidebar from "@/app/_components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const noSidebarRoutes = ["/admin/login"];
  const shouldSidebar = !noSidebarRoutes.includes(pathname);

  return (
    <div className="flex h-screen">
      {shouldSidebar && <Sidebar />}
      <main className="flex-1 p-6 ml-64 overflow-y-auto bg-gray-100">{children}</main>
    </div>
  );
}
