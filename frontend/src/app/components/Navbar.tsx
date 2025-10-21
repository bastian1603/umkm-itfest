"use client";
import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-800">UMKM Connect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="" className="text-gray-700 hover:text-teal-600 transition">Beranda</a>
            <a href="" className="text-gray-700 hover:text-teal-600 transition">Produk</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition">Distributor</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition">Tentang Kami</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href='/login'>
            <button className="text-teal-600 hover:text-teal-700 font-medium transition">
              Login
            </button>
            </Link>
            <Link href='/register'>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
              Daftar
            </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-teal-600 transition">Beranda</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition">Produk</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition">Distributor</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 transition">Tentang Kami</a>
              <div className="flex flex-col space-y-2 pt-2">
                <button className="text-teal-600 hover:text-teal-700 font-medium transition text-left">
                  Login
                </button>
                <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
                  Daftar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;