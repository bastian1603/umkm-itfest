"use client";
import React from 'react';
import { Bell } from 'lucide-react';
import Sidebar from "../../producer/components/common/sidebar";
const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      status: 'Completed',
      product: 'Handmade Soap',
      producer: 'SoapCraft',
      distributor: 'EcoDistributors',
      date: '2024-07-20'
    },
    {
      id: 2,
      status: 'Pending',
      product: 'Organic Honey',
      producer: 'BeeNatural',
      distributor: 'HealthHub',
      date: '2024-07-22'
    },
    {
      id: 3,
      status: 'Shipped',
      product: 'Artisan Cheese',
      producer: 'CheeseMasters',
      distributor: 'GourmetGoods',
      date: '2024-07-25'
    },
    {
      id: 4,
      status: 'Cancelled',
      product: 'Craft Beer',
      producer: 'BreweryCo',
      distributor: 'DrinkDepot',
      date: '2024-07-28'
    },
    {
      id: 5,
      status: 'Completed',
      product: 'Handmade Soap',
      producer: 'SoapCraft',
      distributor: 'EcoDistributors',
      date: '2024-07-20'
    }
  ];

  const getStatusStyle = (status) => {
    const styles = {
      Completed: 'bg-gray-100 text-gray-700',
      Pending: 'bg-amber-50 text-amber-700',
      Shipped: 'bg-blue-50 text-blue-700',
      Cancelled: 'bg-red-50 text-red-700'
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar activeMenu="Transactions" />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Transaction History</h1>
        {/* Transaction Table Card */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-6 px-8 py-5 border-b border-gray-200 bg-gray-50">
            <div className="text-sm font-medium text-gray-700">Status</div>
            <div className="text-sm font-medium text-gray-700">Product</div>
            <div className="text-sm font-medium text-gray-700">Producer</div>
            <div className="text-sm font-medium text-gray-700">Distributor</div>
            <div className="text-sm font-medium text-gray-700">Date</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid grid-cols-5 gap-6 px-8 py-6 hover:bg-gray-50 transition-colors"
              >
                {/* Status Badge */}
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusStyle(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </div>

                {/* Product Link */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                  >
                    {transaction.product}
                  </a>
                </div>

                {/* Producer Link */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                  >
                    {transaction.producer}
                  </a>
                </div>

                {/* Distributor Link */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                  >
                    {transaction.distributor}
                  </a>
                </div>

                {/* Date Link */}
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-cyan-600 hover:text-cyan-700 hover:underline transition-colors"
                  >
                    {transaction.date}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransactionHistory;