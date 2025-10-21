"use client";
import React, { useState } from 'react';
import Sidebar from '../../producer/components/common/sidebar';
import { Search, Edit, Package } from 'lucide-react';
import AddProductForm from './Forms/AddProductForm';

// ==================== PRODUCT ROW COMPONENT ====================
const ProductRow = ({ product }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <Package size={24} className="text-gray-400" />
            )}
          </div>
          <span className="text-sm font-medium text-gray-900">{product.name}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
      <td className="px-6 py-4 text-sm text-green-600 font-medium">${product.price}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
      <td className="px-6 py-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {product.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <button className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm transition-colors">
          <Edit size={16} />
          Edit
        </button>
      </td>
    </tr>
  );
};

// ==================== MAIN COMPONENT ====================
export default function ProductManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Ceramics',
      category: 'Ceramics',
      price: '25.00',
      stock: 100,
      status: 'Active',
      image: null
    },
    {
      id: 2,
      name: 'Home Decor',
      category: 'Home Decor',
      price: '45.00',
      stock: 50,
      status: 'Active',
      image: null
    },
    {
      id: 3,
      name: 'Bath & Body',
      category: 'Bath & Body',
      price: '15.00',
      stock: 200,
      status: 'Active',
      image: null
    },
    {
      id: 4,
      name: 'Kitchenware',
      category: 'Kitchenware',
      price: '30.00',
      stock: 75,
      status: 'Active',
      image: null
    },
    {
      id: 5,
      name: 'Fashion Accessories',
      category: 'Fashion Accessories',
      price: '20.00',
      stock: 150,
      status: 'Active',
      image: null
    }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = () => {
    setShowAddForm(true);
  };

  const handleBackToList = () => {
    setShowAddForm(false);
  };

  const handleSubmitProduct = (newProduct) => {
    const product = {
      id: products.length + 1,
      name: newProduct.productName,
      category: newProduct.category,
      price: newProduct.price,
      stock: newProduct.stock,
      status: 'Active',
      image: null
    };
    setProducts([...products, product]);
    setShowAddForm(false);
  };

  const handleEditProduct = (product) => {
    console.log('Edit product:', product);
    // Implement edit functionality
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeMenu="Products" />

      <main className="flex-1 p-8">
        {showAddForm ? (
          <AddProductForm
            onBack={handleBackToList}
            onSubmit={handleSubmitProduct}
          />
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900">Products</h1>
              <button
                onClick={handleAddProduct}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
              >
                Add Product
              </button>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

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
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Stock
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <ProductRow
                        key={product.id}
                        product={product}
                        onEdit={handleEditProduct}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                        No products found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>
        )}
      </main>
    </div>
  );
}