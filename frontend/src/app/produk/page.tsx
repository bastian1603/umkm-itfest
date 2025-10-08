"use client";

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown,ChevronRight } from 'lucide-react';
import { useState } from 'react';

const products = [
  { id: 1,
    title: 'Keripik Singkong Balado',
    price: 'Rp 15.000', 
    producer: 'Produksi Jaya', 
    description: 'Keripik singkong balado dengan rasa pedas manis yang khas, cocok sebagai camilan sehari-hari. Terbuat dari singkong pilihan dan bumbu balado berkualitas.',
    mainImage: 'https://via.placeholder.com/500x500?text=Keripik+Singkong+Balado', // Dummy image
    thumbnails: [
    'https://via.placeholder.com/80x80?text=Thumb+1',
    'https://via.placeholder.com/80x80?text=Thumb+2',
    'https://via.placeholder.com/80x80?text=Thumb+3',
  ], },
  { id: 2, title: 'Kopi Robusta Toraja', price: 'Rp 35.000', producer: 'Kopi Nusantara', image: 'https://via.placeholder.com/300x200?text=Kopi+Robusta' },
  { id: 3, title: 'Batik Tulis Madura', price: 'Rp 250.000', producer: 'Batik Indah', image: 'https://via.placeholder.com/300x200?text=Batik+Tulis' },
];

export default function ProdukPage() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filter */}
          <div className="lg:col-span-1 space-y-4">
            <div className="relative">
                    <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari produk..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Filter</h3>
              <div className="relative">
                <select
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                >
                  <option>Semua Kategori</option>
                  <option>Makanan</option>
                  <option>Minuman</option>
                  <option>Pakaian</option>  
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>

          {/* Product List Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
