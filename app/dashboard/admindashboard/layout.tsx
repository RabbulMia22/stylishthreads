"use client";

import Sidebar from "@/components/Admin/Sidebar";
import Topbar from "@/components/Admin/Topbar";
import React, { ReactNode, useState } from "react";
import  { Dispatch, SetStateAction } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}
interface SidebarProps {
  openMobileMenu: boolean;
  setopenMobileMenu: Dispatch<SetStateAction<boolean>>;
}

function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (left) */}
      <Sidebar openMobileMenu={sidebarOpen} setopenMobileMenu={setSidebarOpen} />

      {/* Main content (right) */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Topbar at the top */}
        <Topbar openMobileMenu={sidebarOpen} setopenMobileMenu={setSidebarOpen} />

        {/* Page content */}
        <main className="flex-1 p-6 bg-gra-50 ">{children}</main>
      </div>
    </div>
  );
}

export default AdminLayout;
