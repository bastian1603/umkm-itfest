"use client";
import React, { useState } from "react";
import InputField from "../../components/forms/InputField";
import SelectField from "../../components/forms/selectField";
import TextAreaField from "../../components/forms/TextAreaField";
import SectionCard from "../../components/forms/SectionCard";
import ImageUpload from "../../components/forms/ImageUpload";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// ==================== MAIN COMPONENT ====================
export default function AddProductForm() {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    description: '',
    price: '',
    stock: '',
    unit: '',
    sku: '',
    weight: '',
    dimensions: {
      length: '',
      width: '',
      height: ''
    }
  });

  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Personal Care',
    'Food & Beverage',
    'Home Goods',
    'Fashion & Accessories',
    'Handicrafts',
    'Health & Wellness',
    'Others'
  ];

  const units = ['pcs', 'kg', 'gram', 'liter', 'ml', 'box', 'pack'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.startsWith('dimensions.')) {
      const dimensionKey = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        dimensions: {
          ...prev.dimensions,
          [dimensionKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      id: Math.random().toString(36).substr(2, 9)
    }));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    if (!formData.productName || !formData.category || !formData.description || 
        !formData.price || !formData.stock || !formData.unit) {
      alert('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    const submitData = new FormData();
    
    Object.keys(formData).forEach(key => {
      if (key === 'dimensions') {
        submitData.append('dimensions', JSON.stringify(formData.dimensions));
      } else {
        submitData.append(key, formData[key]);
      }
    });

    images.forEach((img, index) => {
      submitData.append(`images[${index}]`, img.file);
    });

    console.log('Form Data:', formData);
    console.log('Images:', images);

    // TODO: Integration with backend
    // try {
    //   const response = await fetch('/api/products', {
    //     method: 'POST',
    //     body: submitData
    //   });
    //   const result = await response.json();
    //   if (result.success) {
    //     // Redirect or show success message
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Product added successfully! (This is a demo)');
    }, 1500);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <ArrowLeft size={20} />
              <Link 
              href="/producer/product"
              >Back to Product</Link>
            </button>
            <h1 className="text-4xl font-bold text-gray-900">Add New Product</h1>
            <p className="text-gray-600 mt-2">Fill in the details to add a new product to your inventory</p>
          </div>

          <div className="space-y-6">
            {/* Basic Information */}
            <SectionCard title="Basic Information">
              <div className="space-y-4">
                <InputField
                  label="Product Name"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="e.g., Handmade Soap"
                  required
                />

                <SelectField
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  options={categories}
                  placeholder="Select a category"
                  required
                />

                <TextAreaField
                  label="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your product in detail..."
                  required
                />

                <InputField
                  label="SKU (Stock Keeping Unit)"
                  name="sku"
                  value={formData.sku}
                  onChange={handleInputChange}
                  placeholder="e.g., SOAP-001"
                />
              </div>
            </SectionCard>

            {/* Pricing and Inventory */}
            <SectionCard title="Pricing & Inventory">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Price (USD) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <InputField
                  label="Stock Quantity"
                  name="stock"
                  type="number"
                  value={formData.stock}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="0"
                  required
                />

                <SelectField
                  label="Unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleInputChange}
                  options={units}
                  placeholder="Select unit"
                  required
                />

                <InputField
                  label="Weight (gram)"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleInputChange}
                  min="0"
                  placeholder="0"
                />
              </div>
            </SectionCard>

            {/* Dimensions */}
            <SectionCard title="Dimensions (Optional)">
              <div className="grid grid-cols-3 gap-4">
                <InputField
                  label="Length (cm)"
                  name="dimensions.length"
                  type="number"
                  value={formData.dimensions.length}
                  onChange={handleInputChange}
                  min="0"
                  step="0.1"
                  placeholder="0"
                />

                <InputField
                  label="Width (cm)"
                  name="dimensions.width"
                  type="number"
                  value={formData.dimensions.width}
                  onChange={handleInputChange}
                  min="0"
                  step="0.1"
                  placeholder="0"
                />

                <InputField
                  label="Height (cm)"
                  name="dimensions.height"
                  type="number"
                  value={formData.dimensions.height}
                  onChange={handleInputChange}
                  min="0"
                  step="0.1"
                  placeholder="0"
                />
              </div>
            </SectionCard>

            {/* Product Images */}
            <SectionCard title="Product Images">
              <ImageUpload
                images={images}
                onUpload={handleImageUpload}
                onRemove={removeImage}
              />
            </SectionCard>

            {/* Form Actions */}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Adding Product...' : 'Add Product'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}