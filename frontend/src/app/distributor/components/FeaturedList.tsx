'use client';

import { useState } from 'react';

interface Distributor {
  id: string;
  name: string;
  specialization: string;
  location: string;
  contactLink: string;
  avatarUrl: string;
  isFeatured: boolean;
}

interface Props {
  distributors: Distributor[];
}

export default function FeaturedList({ distributors }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {distributors.map((distributor) => (
        <FeaturedCard key={distributor.id} distributor={distributor} />
      ))}
    </div>
  );
}

function FeaturedCard({ distributor }: { distributor: Distributor }) {

  // Generate gradient background colors based on name
  const getGradientColors = (name: string) => {
    const colors = [
      'from-orange-200 to-orange-300',
      'from-amber-200 to-amber-300',
      'from-rose-200 to-rose-300',
      'from-pink-200 to-pink-300',
      'from-purple-200 to-purple-300',
      'from-blue-200 to-blue-300',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Info Section */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {distributor.name}
          </h3>
          <p className="text-sm text-gray-600">
            {distributor.specialization}
          </p>
        </div>
      </div>
    </div>
  );
}