"use client";
import React from "react";
import Sidebar from "../../producer/components/common/sidebar"; 

export default function ProducerDashboard() {
  const statsCards = [
    { title: "Products", value: "12" },
    { title: "Pending Applications", value: "3" },
    { title: "Active Transactions", value: "5" },
  ];

  const recentActivity = [
    {
      product: "Handmade Soap",
      category: "Personal Care",
      stock: "50",
      price: "$5.99",
      status: "Active",
    },
    {
      product: "Organic Honey",
      category: "Food & Beverage",
      stock: "20",
      price: "$12.50",
      status: "Active",
    },
    {
      product: "Ceramic Mug",
      category: "Home Goods",
      stock: "100",
      price: "$8.75",
      status: "Active",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-gray-600 text-sm font-medium mb-2">
                {card.title}
              </h3>
              <p className="text-4xl font-bold text-gray-900">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Manage Products
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
              View Applications
            </button>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentActivity.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{item.product}</td>
                    <td className="px-6 py-4 text-sm text-green-600">{item.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.stock}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.price}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
