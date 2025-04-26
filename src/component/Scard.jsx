import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const Scard = ({ handleAddToCart, cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]) 
  const [showAll, setShowAll] = useState(false) 
  const [showProducts, setShowProducts] = useState(false) 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId))
  }

  
  const handleViewAllClick = () => {
    setShowAll(prev => !prev);
  };
  

  const handleCardIconClick = () => {
    setShowProducts(!showProducts) 
  }

  return (
    <div className="px-[5%] mt-[100px] py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-9 bg-red-600" />
            <h2 className="text-red-500 text-xs font-bold">Our Products</h2>
          </div>
          <h1 className="text-2xl font-bold">Best Selling Products</h1>
        </div>
        <button
          onClick={handleViewAllClick} 
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
        >
          View All
        </button>
      </div>

     
      <button 
        onClick={handleCardIconClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm mb-4"
      >
        Show Products
      </button>

     
      {showProducts && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-end">
          {(showAll ? products : products.slice(16, 20)).map((product) => (
            <div key={product.id} className="bg-white p-3 w-[300px] justify-between rounded-md shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
                <div className="flex items-center text-yellow-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill={i < Math.round(product.rating.rate) ? '#FBBF24' : 'none'}
                    />
                  ))}
                  <span className="ml-1 text-gray-500">({product.rating.count})</span>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <span className="text-gray-900 font-semibold">${product.price}</span>
                </div>
                </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full mt-3 py-1 bg-black text-white text-sm rounded hover:bg-gray-800"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Scard
