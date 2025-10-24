'use client';

import { useState, useMemo } from 'react';
import DistributorSearch from '../components/DistributorSearch';
import DistributorTable from '../components/DistributorTable';

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
  featuredDistributors: Distributor[];
  allDistributors: Distributor[];
}

export default function DistributorsClient({ featuredDistributors, allDistributors }: Props) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter distributors based on search query
  const filteredDistributors = useMemo(() => {
    if (!searchQuery.trim()) return allDistributors;

    const query = searchQuery.toLowerCase();
    return allDistributors.filter(
      distributor =>
        distributor.name.toLowerCase().includes(query) ||
        distributor.specialization.toLowerCase().includes(query) ||
        distributor.location.toLowerCase().includes(query)
    );
  }, [allDistributors, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        Distributors
      </h1>

      {/* Search Bar */}
      <DistributorSearch value={searchQuery} onChange={setSearchQuery} />

      {/* All Distributors Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Distributors
        </h2>
        <DistributorTable distributors={filteredDistributors} />
      </section>

      {/* No Results Message */}
      {searchQuery && filteredDistributors.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No distributors found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search terms
          </p>
        </div>
      )}
    </div>
  );
}