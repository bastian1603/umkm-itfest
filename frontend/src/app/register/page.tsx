import React from 'react';
import Link from "next/link";
import Navbar from '../components/Navbar';

export default function SignupPage() {
  return (
    <>
    <div className='min-h-screen bg-white'>
        <Navbar />
        <div className="flex items-center justify-center px-4 py-12 p-2">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Daftar Akun Baru
                </h1>
                <p className="text-gray-600 text-sm">
                  Buat akun untuk memulai.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-5">
                {/* Nama Field */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan password Anda"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>

                {/* Konfirmasi Password Field */}
                <div>
                  <label 
                    htmlFor="confirmPassword" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                    >
                    Konfirmasi Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Konfirmasi password Anda"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                  />
                </div>

                {/* Peran Dropdown */}
                <div>
                  <label 
                    htmlFor="role" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Peran
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition appearance-none cursor-pointer"
                    defaultValue=""
                    >
                    <option value="" disabled>
                      Pilih peran Anda
                    </option>
                    <option value="produsen">Produsen</option>
                    <option value="distributor">Distributor</option>
                  </select>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="mt-1 h-4 w-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 cursor-pointer"
                  />
                  <label 
                    htmlFor="terms" 
                    className="ml-2 text-sm text-gray-700"
                    >
                    Saya setuju dengan{' '}
                    <a 
                      href="#" 
                      className="text-cyan-600 hover:text-cyan-700 font-medium hover:underline"
                    >
                      syarat dan ketentuan
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700  text-white font-medium py-3 rounded-md transition duration-200 shadow-sm hover:shadow-md"
                >
                  Daftar
                </button>
                <p className="text-center mt-4 text-sm text-gray-700">
                  {/* Mengganti warna teks menjadi oranye/merah seperti di gambar */}
                  Sudah punya akun?

                  {/* Menggunakan komponen Link dari Next.js adalah praktik terbaik */}
                  <Link 
                    href="/login" 
                    className="text-cyan-600 hover:text-cyan-700     ml-1 hover:underline" 
                    // Tambahkan ml-1 untuk sedikit jarak dari teks sebelumnya
                  >
                    Masuk Sekarang
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
    </div>
</>
  );
}