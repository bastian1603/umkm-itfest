// components/ProductCard.tsx
import Link from 'next/link'
interface ProductCardProps {
  id: number
  title: string
  price: string
  producer: string
  mainImage: string
}

export default function ProductCard({ id, title, price, producer, mainImage }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img src={mainImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-teal-600 font-bold mb-1">{price}</p>
        <p className="text-sm text-gray-600 mb-4">{producer}</p>
        <Link
          href={`/produk/${id}`}
          className="w-full block text-center bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
            <button>

          Lihat Detail
            </button>
        </Link>
      </div>
    </div>
  )
}