import { useState } from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Countdown from '../component/Countdown'
import Fcart from '../component/Fcart'
import Brows from '../component/Brows'
import Scard from '../component/Scard'
import Products from '../component/Products'
import Category from '../component/Category'
import Svgs from '../component/Svgs'
import Footer from '../component/Footer'
import Collections from '../component/Colections'
import {Trash2}  from 'lucide-react';


function Home() {
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
  
    const handleAddToCart = (product) => {
      setCartItems((prevItems) => {
        return [...prevItems, product]
      })
      setCartCount(cartItems.length + 1) 
    }
  
    const handleRemoveFromCart = (productId) => {
      setCartItems((prevItems) => prevItems.filter(item => item.id !== productId))
      setCartCount(cartItems.length - 1)  
    }
  
    return (
      <>
        <Navbar cartCount={cartCount} />
        <Hero />
        <Countdown />
        <Fcart setCartCount={setCartCount} handleAddToCart={handleAddToCart} />
        <Brows />
        <Scard handleAddToCart={handleAddToCart} />
        <Category />
        <Products handleAddToCart={handleAddToCart} />
        <Collections />
        <Svgs />
        <Footer />
  
       
        <div className={`fixed mt-[100px] top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-all duration-300 ${cartCount > 0 ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-4">
            <h2 className="font-bold text-xl mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center mb-4">
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.title}</span>
                        <span className="text-gray-500">${item.price}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2/>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <button className="w-full bg-black text-white py-2 rounded">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
  
  export default Home
  
