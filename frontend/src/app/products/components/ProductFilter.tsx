'use client';

import { useState } from 'react';

type UserRole = 'GUEST' | 'DISTRIBUTOR';

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  showDiscountOnly: boolean;
  onShowDiscountOnlyChange: (show: boolean) => void;
  sortBy: string;
  onSortByChange: (sort: string) => void;
  userRole: UserRole;
}

export default function ProductFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
  showDiscountOnly,
  onShowDiscountOnlyChange,
  sortBy,
  onSortByChange,
  userRole,
}: Props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const resetFilters = () => {
    onCategoryChange('all');
    onPriceRangeChange([0, 500000]);
    onMinRatingChange(0);
    onShowDiscountOnlyChange(false);
    onSortByChange('name');
  };

  return (
    <div className="mb-8">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
        >
          <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Filters & Sort
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {/* Category Filter */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                📂 Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category === 'all' ? 'All Products' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                💰 Price Range
              </label>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="500000"
                  step="10000"
                  value={priceRange[1]}
                  onChange={(e) => onPriceRangeChange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300">
                    {formatCurrency(priceRange[0])}
                  </span>
                  <span className="text-gray-400">—</span>
                  <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg font-semibold text-blue-700 dark:text-blue-400">
                    {formatCurrency(priceRange[1])}
                  </span>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                ⭐ Min Rating
              </label>
              <select
                value={minRating}
                onChange={(e) => onMinRatingChange(parseFloat(e.target.value))}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="0">All Ratings</option>
                <option value="4.5">4.5+ ⭐</option>
                <option value="4.0">4.0+ ⭐</option>
                <option value="3.5">3.5+ ⭐</option>
                <option value="3.0">3.0+ ⭐</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                🔄 Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => onSortByChange(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="name">Name (A-Z)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                {userRole === 'DISTRIBUTOR' && (
                  <option value="stock">Most Stock</option>
                )}
              </select>
            </div>

            {/* Distributor-Only Filters */}
            {userRole === 'DISTRIBUTOR' && (
              <div className="flex items-end">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={showDiscountOnly}
                    onChange={(e) => onShowDiscountOnlyChange(e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
                  />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    🏷️ Discounts Only
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Reset Button */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset All Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}