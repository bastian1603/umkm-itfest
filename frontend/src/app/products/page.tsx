// app/products/page.tsx
import ProductListClient from './components/ProductListClient';
import Navbar from '../components/Navbar';
// Simulated data fetching (in real app, this would be from API/Database)
async function getProducts() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      category: 'Electronics',
      priceRetail: 50000,
      priceDistributor: 40000,
      stock: 145,
      minOrder: 10,
      rating: 4.8,
      discount: 10,
    },
    {
      id: '2',
      name: 'Smart Watch Pro',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      category: 'Electronics',
      priceRetail: 120000,
      priceDistributor: 96000,
      stock: 89,
      minOrder: 5,
      rating: 4.6,
      discount: 15,
    },
    {
      id: '3',
      name: 'Ergonomic Office Chair',
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500',
      category: 'Furniture',
      priceRetail: 85000,
      priceDistributor: 68000,
      stock: 34,
      minOrder: 3,
      rating: 4.9,
    },
    {
      id: '4',
      name: 'Organic Green Tea Set',
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=500',
      category: 'Food & Beverage',
      priceRetail: 25000,
      priceDistributor: 20000,
      stock: 0,
      minOrder: 20,
      rating: 4.5,
      expiryDate: '2026-12-31',
    },
    {
      id: '5',
      name: 'Professional Camera Lens',
      image: 'https://images.unsplash.com/photo-1606980627901-0db2c5b6e1c6?w=500',
      category: 'Electronics',
      priceRetail: 350000,
      priceDistributor: 280000,
      stock: 12,
      minOrder: 2,
      rating: 4.9,
      discount: 5,
    },
    {
      id: '6',
      name: 'Luxury Leather Bag',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500',
      category: 'Fashion',
      priceRetail: 95000,
      priceDistributor: 76000,
      stock: 67,
      minOrder: 5,
      rating: 4.7,
    },
    {
      id: '7',
      name: 'Bluetooth Speaker',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
      category: 'Electronics',
      priceRetail: 42000,
      priceDistributor: 33600,
      stock: 203,
      minOrder: 15,
      rating: 4.4,
      discount: 20,
    },
    {
      id: '8',
      name: 'Modern Desk Lamp',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      category: 'Furniture',
      priceRetail: 38000,
      priceDistributor: 30400,
      stock: 156,
      minOrder: 8,
      rating: 4.6,
    },
  ];
}

// Simulate user role detection (in real app, from session/auth)
async function getUserRole() {
  // You can toggle this to test different roles
  return 'GUEST' as 'GUEST' | 'DISTRIBUTOR';
  // return 'DISTRIBUTOR' as 'GUEST' | 'DISTRIBUTOR';
}

export default async function ProductsPage() {
  const [products, userRole] = await Promise.all([
    getProducts(),
    getUserRole(),
  ]);

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <ProductListClient products={products} userRole={userRole} />
    </main>
    </>
  );
}