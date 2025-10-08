"use client";
import Link from 'next/link';
import React from 'react';
import { 
  ShoppingBag, 
  Package, 
  FileText, 
  Users, 
  Bell, 
  User, 
  CheckCircle, 
  Eye,
  ArrowRight 
} from 'lucide-react';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold text-gray-800">UMKM Connect</span>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-cyan-600 transition font-medium">
              Beranda
            </a>
            <a href="#" className="text-gray-700 hover:text-cyan-600 transition font-medium">
              Produk
            </a>
            <a href="#" className="text-gray-700 hover:text-cyan-600 transition font-medium">
              Distributor
            </a>
            <a href="#" className="text-gray-700 hover:text-cyan-600 transition font-medium">
              Pengajuan
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <div className="h-8 w-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Dashboard Card Component
const DashboardCard = ({ icon: Icon, label, value, action, actionText, iconColor = "text-cyan-500", iconBg = "bg-cyan-50" }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className={`${iconBg} p-3 rounded-lg`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">{label}</p>
            {value && (
              <p className="text-3xl font-bold text-gray-900">{value}</p>
            )}
            {action && (
              <button className="flex items-center space-x-1 text-cyan-600 hover:text-cyan-700 font-medium mt-2 group">
                <span>{actionText}</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
        {value && (
          <div className={`${iconBg} px-3 py-1 rounded-full`}>
            <span className={`text-sm font-semibold ${iconColor}`}>{value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Notification Item Component
const NotificationItem = ({ icon: Icon, title, description, time, iconColor, iconBg }) => {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer">
      <div className={`${iconBg} p-2 rounded-lg flex-shrink-0`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 mb-1">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <span className="text-xs text-gray-500 whitespace-nowrap">{time}</span>
    </div>
  );
};

// Main Dashboard Page
export default function DashboardProdusen() {
  const stats = [
    {
      icon: Package,
      label: "Jumlah Produk",
      value: "120",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50"
    },
    {
      icon: FileText,
      label: "Pengajuan Aktif",
      value: "15",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50"
    },
    {
      icon: Users,
      label: "Distributor Potensial",
      action: true,
      actionText: "Lihat Distributor",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50"
    },
    {
      icon: Bell,
      label: "Notifikasi",
      value: "3",
      action: true,
      actionText: "Lihat Semua",
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50"
    }
  ];

  const notifications = [
    {
      icon: CheckCircle,
      title: "Persetujuan Produk",
      description: "Produk Anda 'Kopi Arabika' telah disetujui oleh distributor 'Toko Jaya'",
      time: "2 jam lalu",
      iconColor: "text-green-600",
      iconBg: "bg-green-50"
    },
    {
      icon: FileText,
      title: "Pengajuan Baru",
      description: "Distributor 'Toko Sejahtera' mengajukan permintaan untuk produk 'Teh Hijau'",
      time: "1 hari lalu",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      icon: Eye,
      title: "Produk Dilihat",
      description: "Produk Anda 'Madu Hutan' telah dilihat oleh 5 distributor",
      time: "3 hari lalu",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Produsen
          </h1>
          <p className="text-gray-600">
            Selamat datang kembali, mari kita lihat progres Anda.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <DashboardCard key={index} {...stat} />
          ))}
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Notifikasi Terbaru
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {notifications.map((notification, index) => (
              <NotificationItem key={index} {...notification} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}