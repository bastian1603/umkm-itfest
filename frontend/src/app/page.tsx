"use client";
import React from 'react';
import Navbar from './components/Navbar';

// Navbar Component
const AppNavbar = () => {
  return (
    <Navbar />
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Perluas Pasar UMKM Anda dengan Distributor Terpercaya
        </h1>
        <p className="text-lg md:text-xl mb-8 text-teal-100">
          Platform Interaksi Produsen & Distributor
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-teal-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-900 transition w-full sm:w-auto">
            Mulai sebagai Produsen
          </button>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition w-full sm:w-auto">
            Cari Produk sebagai Distributor
          </button>
        </div>
      </div>
    </section>
  );
};

// Product Card Component
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-teal-600 font-bold mb-4">{price}</p>
        <button className="w-full bg-teal-100 text-teal-700 py-2 rounded-lg hover:bg-teal-200 transition font-medium">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

// Products Section Component
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: 'Kopi Arabika Gayo',
      price: 'Rp 25.000',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23D4A574" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" dy=".3em" fill="%23654321"%3EKopi Arabika%3C/text%3E%3C/svg%3E'
    },
    {
      id: 2,
      name: 'Keripik Singkong Balado',
      price: 'Rp 15.000',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232C3E50" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" dy=".3em" fill="%23ECF0F1"%3EKeripik Singkong%3C/text%3E%3C/svg%3E'
    },
    {
      id: 3,
      name: 'Batik Tulis Madura',
      price: 'Rp 150.000',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%238B7355" width="400" height="300"/%3E%3Cpattern id="p" width="20" height="20" patternUnits="userSpaceOnUse"%3E%3Cline x1="0" y1="0" x2="20" y2="20" stroke="%23F4E4C1" stroke-width="2"/%3E%3Cline x1="20" y1="0" x2="0" y2="20" stroke="%23F4E4C1" stroke-width="2"/%3E%3C/pattern%3E%3Crect fill="url(%23p)" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="20" text-anchor="middle" dy=".3em" fill="%23FFFFFF"%3EBatik Tulis%3C/text%3E%3C/svg%3E'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Produk Populer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-700 to-slate-800 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Belum punya akun?
        </h2>
        <button className="bg-teal-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-600 transition text-lg">
          Daftar sekarang!
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
        © 2024 Platform Distribusi UMKM. All rights reserved.
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <CTASection />
      <Footer />
    </div>
  );
}