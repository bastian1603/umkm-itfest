export interface Distributor {
  id: string;
  name: string;
  specialization: string;
  location: string;
  contactLink: string;
  avatarUrl: string;
  isFeatured: boolean;
}

// Mock data for distributors
export const mockDistributors: Distributor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    specialization: 'Organic Produce',
    location: 'Jakarta',
    contactLink: '/contact/sarah-chen',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'David Lee',
    specialization: 'Artisanal Goods',
    location: 'Bandung',
    contactLink: '/contact/david-lee',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Emily Wong',
    specialization: 'Baked Goods',
    location: 'Surabaya',
    contactLink: '/contact/emily-wong',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Michael Tan',
    specialization: 'Seafood',
    location: 'Medan',
    contactLink: '/contact/michael-tan',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    isFeatured: false,
  },
  {
    id: '5',
    name: 'Jessica Lim',
    specialization: 'Dairy Products',
    location: 'Yogyakarta',
    contactLink: '/contact/jessica-lim',
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    isFeatured: false,
  },
  {
    id: '6',
    name: 'Robert Kim',
    specialization: 'Frozen Foods',
    location: 'Semarang',
    contactLink: '/contact/robert-kim',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    isFeatured: false,
  },
  {
    id: '7',
    name: 'Amanda Zhang',
    specialization: 'Fresh Fruits',
    location: 'Malang',
    contactLink: '/contact/amanda-zhang',
    avatarUrl: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400',
    isFeatured: false,
  },
  {
    id: '8',
    name: 'Kevin Martinez',
    specialization: 'Beverages',
    location: 'Palembang',
    contactLink: '/contact/kevin-martinez',
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    isFeatured: false,
  },
];