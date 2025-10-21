"use client";
import React from "react";
import { Home, Package, FileText, DollarSign, User, HelpCircle } from 'lucide-react';
import Link from "next/link";

export default function Sidebar(activeMenu = 'Products') {
  const navItems = [
    { name: "Dashboard", icon: Home, path: "/producer/dashboard" },
    { name: "Products", icon: Package,path: "/producer/product" },
    { name: "Applications", icon: FileText, path: "/producer/applications" },
    { name: "Transactions", icon: DollarSign, path: "/producer/transactions" },
    { name: "Profile", icon: User, path: "/dashboard/producer/profile" },
  ];  

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">UMKM Connect</h1>
        </div>
        <nav className="flex-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === activeMenu;
            return (
              <Link
                href={item.path}
                key={item.name}
                className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-lg text-left transition-colors ${
                  isActive
                    ? 'bg-green-50 text-gray-900 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 space-y-4">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            <HelpCircle size={20} />
            <span>Help and Support</span>
          </button>
        </div>
      </aside>
  );
}