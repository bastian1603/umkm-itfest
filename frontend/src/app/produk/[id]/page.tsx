// app/produk/[id]/page.tsx
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { products } from '../../datadummy/products'

interface ProductDetailProps {
  params: { id: string }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
    const { id } = params

  // Ambil data produk berdasarkan id
  const product = products.find((p) => p.id === Number(id))

  if (!product) return <div>Produk tidak ditemukan</div>
    return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600 flex items-center space-x-2" aria-label="Breadcrumb">
          <Link href="/produk" className="text-teal-600 hover:underline">Produk</Link>
          <ChevronRight className="text-gray-400" size={16} />
          <span>Makanan & Minuman</span>
          <ChevronRight className="text-gray-400" size={16} />
          <span>Keripik</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 bg-gray-200 rounded cursor-pointer overflow-hidden ${
                    index === 0 ? 'ring-2 ring-teal-500 ring-offset-2' : ''
                  }`}
                >
                  <Image
                    src={thumb}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600">
                Diproduksi oleh{' '}
                <Link href={`/produsen/${product.producer}`} className="text-teal-600 hover:underline">
                  {product.producer}
                </Link>
              </p>
            </div>

            <div className="text-4xl font-bold text-teal-600">Rp 15.000</div>

            <div>
              <h2 className="font-bold text-gray-900 mb-3">Deskripsi Produk</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <button className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-teal-600 transition-colors">
              Ajukan Distribusi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}