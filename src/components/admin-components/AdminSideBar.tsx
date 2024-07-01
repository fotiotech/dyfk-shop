"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSideBar = () => {
  const pathname = usePathname();
  return (
    <div className="absolute w-1/2 max-h-screen overflow-hidden border bg-white">
      <div>
        <p className="p-2 font-bold">DashBoard</p>
        <ul>
          <li className="py-1 hover:bg-slate-50">Overview</li>
        </ul>
      </div>
      <div>
        <p className="p-2 font-bold">User</p>
        <ul>
          <li className="py-1 hover:bg-slate-50">Profile</li>
          <li className="py-1 hover:bg-slate-50">Account</li>
          <li className="py-1 hover:bg-slate-50">Notifications</li>
        </ul>
      </div>
      <div>
        <p className="p-2 font-bold">Shopping</p>
        <ul>
          <li className="py-1 hover:bg-slate-50">
            <Link
              className={`link ${
                pathname === "/admin/overview" ? "active" : ""
              }`}
              href={"/admin/overview"}
            >
              Overview
            </Link>
          </li>
          <li className="py-1 hover:bg-slate-50">
            <Link
              className={`link ${
                pathname === "/admin/shopping" ? "active" : ""
              }`}
              href={"/shopping"}
            >
              Shop
            </Link>
          </li>
          <li className="py-1 hover:bg-slate-50">Orders</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default AdminSideBar;
