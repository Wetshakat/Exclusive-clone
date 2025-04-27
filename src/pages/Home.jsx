import { useState } from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Countdown from "../component/Countdown";
import Fcart from "../component/Fcart";
import Brows from "../component/Brows";
import Scard from "../component/Scard";
import Products from "../component/Products";
import Category from "../component/Category";
import Svgs from "../component/Svgs";
import Footer from "../component/Footer";
import Collections from "../component/Colections";
import { Trash2,ShoppingCart } from "lucide-react";

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, product];
      setCartCount(updatedCart.length);
      return updatedCart;
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== productId);
      setCartCount(updatedCart.length);
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Countdown />
      <Fcart handleAddToCart={handleAddToCart} />
      <Brows />
      <Scard handleAddToCart={handleAddToCart} />
      <Category />
      <Products handleAddToCart={handleAddToCart} />
      <Collections />
      <Svgs />
      <Footer />

      <div
        className={`fixed top-10 right-0 w-80 h-full bg-white text-xs text-black flex flex-col p-4 transition-all duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Your Cart ({cartCount})</h2>
          <button onClick={toggleCart} className="text-white text-2xl">
            X
          </button>
        </div>

       
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover"
                    />
                    <span className="text-lg font-medium">{item.title}</span>
                    <span className="text-gray-500">${item.price}</span>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="text-2xl" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4">
          <button className="w-full bg-black text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>

      <button
        onClick={toggleCart}
        className="fixed bottom-4 right-4 bg-blue-800 text-white p-2 rounded-full shadow-lg"
      >
        <ShoppingCart/>
      </button>
    </>
  );
}

export default Home;
