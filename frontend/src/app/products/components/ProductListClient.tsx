'use client';

import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import ProductFilter from './ProductFilter';

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
  products: Product[];
  userRole: UserRole;
}

export default function ProductListClient({ products, userRole }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [minRating, setMinRating] = useState<number>(0);
  const [showDiscountOnly, setShowDiscountOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('name');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(products.map(p => p.category))];
    return cats;
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price range filter (based on user role)
    filtered = filtered.filter(p => {
      const price = userRole === 'DISTRIBUTOR' ? p.priceDistributor : p.priceRetail;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Rating filter
    filtered = filtered.filter(p => p.rating >= minRating);

    // Discount filter (distributor only)
    if (showDiscountOnly && userRole === 'DISTRIBUTOR') {
      filtered = filtered.filter(p => p.discount && p.discount > 0);
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          const priceA = userRole === 'DISTRIBUTOR' ? a.priceDistributor : a.priceRetail;
          const priceB = userRole === 'DISTRIBUTOR' ? b.priceDistributor : b.priceRetail;
          return priceA - priceB;
        case 'price-desc':
          const priceA2 = userRole === 'DISTRIBUTOR' ? a.priceDistributor : a.priceRetail;
          const priceB2 = userRole === 'DISTRIBUTOR' ? b.priceDistributor : b.priceRetail;
          return priceB2 - priceA2;
        case 'rating':
          return b.rating - a.rating;
        case 'stock':
          return b.stock - a.stock;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, selectedCategory, priceRange, minRating, showDiscountOnly, sortBy, userRole]);

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8 lg:mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          Product
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {userRole === 'DISTRIBUTOR' 
            ? '🎉 Welcome back, Partner! Enjoy exclusive distributor pricing.' 
            : 'Discover our premium collection. Sign in as a distributor for special prices.'}
        </p>
      </div>

      {/* Filter Section */}
      <ProductFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        minRating={minRating}
        onMinRatingChange={setMinRating}
        showDiscountOnly={showDiscountOnly}
        onShowDiscountOnlyChange={setShowDiscountOnly}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        userRole={userRole}
      />

      {/* Product Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredProducts.length}</span> products
        </p>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} userRole={userRole} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No products found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your filters to see more results
          </p>
        </div>
      )}
    </div>
  );
}