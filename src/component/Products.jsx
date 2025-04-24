import React, { useEffect, useState } from 'react'
import { Heart, Eye, Star } from 'lucide-react'

const Products = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data.slice(7, 15))
      } catch (error) {
        console.error('Failed to load products:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="px-[5%] py-10">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-6 bg-red-500" />
          <h3 className="text-red-500 text-sm font-bold">Our Products</h3>
        </div>
        <h1 className="text-3xl font-bold">Explore Our Products</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow-md hover:shadow-lg transition relative"
          >
            {idx % 7 === 0 && (
              <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                NEW
              </span>
            )}

            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <Heart size={16} className="text-gray-400 hover:text-red-500 cursor-pointer" />
              <Eye size={16} className="text-gray-400 hover:text-blue-500 cursor-pointer" />
            </div>

            <img src={product.image} alt={product.title} className="h-32 object-contain mx-auto mb-3" />

            <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>
            <div className="mt-1 flex items-center text-yellow-400 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < Math.round(product.rating.rate) ? '#FBBF24' : 'none'}
                />
              ))}
              <span className="ml-1 text-gray-500">({product.rating.count})</span>
            </div>
            <p className="text-red-600 font-semibold mt-1">${product.price}</p>

            <button
              onClick={() => handleAddToCart(product)}
              className="mt-3 w-full bg-black text-white py-1 text-sm rounded hover:bg-gray-800"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
