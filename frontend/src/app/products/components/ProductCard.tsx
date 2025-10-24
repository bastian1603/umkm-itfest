'use client';

import { useState } from 'react';
import Image from 'next/image';

type UserRole = 'GUEST' | 'DISTRIBUTOR';

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  priceRetail: number;
  priceDistributor: number;
  stock: number;
  minOrder: number;
  rating: number;
  discount?: number;
  expiryDate?: string;
}

interface Props {
  product: Product;
  userRole: UserRole;
}

export default function ProductCard({ product, userRole }: Props) {
  const [imageError, setImageError] = useState(false);
  const isOutOfStock = product.stock === 0;
  const displayPrice = userRole === 'DISTRIBUTOR' ? product.priceDistributor : product.priceRetail;
  const savings = product.priceRetail - product.priceDistributor;
  const savingsPercent = Math.round((savings / product.priceRetail) * 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 hover:scale-[1.02]">
      {/* Discount Badge */}
      {product.discount && product.discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          -{product.discount}% OFF
        </div>
      )}

      {/* Out of Stock Badge */}
      {isOutOfStock && (
        <div className="absolute top-4 right-4 z-10 bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Out of Stock
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              isOutOfStock ? 'opacity-50 grayscale' : ''
            }`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">📦</div>
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {product.rating.toFixed(1)}
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          {userRole === 'DISTRIBUTOR' ? (
            <>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(displayPrice)}
                </span>
                <span className="text-sm line-through text-gray-400">
                  {formatCurrency(product.priceRetail)}
                </span>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                You save {savingsPercent}% ({formatCurrency(savings)})
              </p>
            </>
          ) : (
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatCurrency(displayPrice)}
            </div>
          )}
        </div>

        {/* Stock Information */}
        <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
          {userRole === 'DISTRIBUTOR' ? (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Stock:</span>
                <span className={`font-semibold ${
                  product.stock > 50 
                    ? 'text-green-600 dark:text-green-400' 
                    : product.stock > 0 
                    ? 'text-yellow-600 dark:text-yellow-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {product.stock > 0 ? `${product.stock} units` : 'Out of Stock'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Min. Order:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {product.minOrder} units
                </span>
              </div>
              {product.expiryDate && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Expiry:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {new Date(product.expiryDate).toLocaleDateString('id-ID')}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                isOutOfStock ? 'bg-red-500' : 'bg-green-500'
              }`} />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {isOutOfStock ? 'Stock Habis' : 'Tersedia'}
              </span>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        {userRole === 'DISTRIBUTOR' ? (
          <div className="space-y-2">
            <button
              disabled={isOutOfStock}
              className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                isOutOfStock
                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
              {isOutOfStock ? 'Out of Stock' : '🛒 Add to Cart'}
            </button>
            <button
              disabled={isOutOfStock}
              className={`w-full py-2.5 px-4 rounded-xl font-medium transition-all duration-200 ${
                isOutOfStock
                  ? 'bg-gray-50 dark:bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-200 dark:border-gray-700'
                  : 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              ⚡ Quick Order
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <button className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              View Details
            </button>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2 px-2">
              💼 <span className="font-medium">Sign in as Distributor</span> for special pricing
            </p>
          </div>
        )}
      </div>
    </div>
  );
}