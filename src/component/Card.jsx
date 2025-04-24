import React, { useState } from 'react'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

 
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  
  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId))
  }

 
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)

  return (
    <div className="px-[5%] py-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-white rounded shadow-md mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <h3 className="font-semibold text-xl">Total Price</h3>
            <p className="text-lg text-red-600">${totalPrice}</p>
          </div>

          <div className="mt-4 flex justify-between">
            <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
              Checkout
            </button>
            <button
              onClick={() => setCartItems([])} 
              className="bg-gray-200 text-black py-2 px-6 rounded hover:bg-gray-300"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
