import { mockDistributors } from '@/types/distributor';
import DistributorsClient from '../distributor/components/DistributorsClient';
import Navbar from '../components/Navbar';

// Simulate data fetching (Server Component)
async function getDistributors() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockDistributors;
}

export default async function DistributorsPage() {
  const distributors = await getDistributors();
  const featuredDistributors = distributors.filter(d => d.isFeatured);
  const allDistributors = distributors;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <Navbar />

      {/* Main Content */}
      <DistributorsClient 
        featuredDistributors={featuredDistributors}
        allDistributors={allDistributors}
      />
    </main>
  );
}