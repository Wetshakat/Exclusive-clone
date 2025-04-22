import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Countdown from './component/Countdown'
import Fcart from './component/Fcart'
import Brows from './component/Brows'
import Scard from './component/Scard'
import Products from './component/Products'
import Category from './component/Category'
import Svgs from './component/Svgs'
import Footer from './component/Footer'
import Collections from './component/Colections'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Countdown />
      <Fcart setCartCount={setCartCount} />
      <Brows />
      <Scard handleAddToCart={handleAddToCart} />
      <Category/>
      <Products handleAddToCart={handleAddToCart}/>
      <Collections/>
      <Svgs/>
      <Footer/>
    </>
  )
}

export default App
