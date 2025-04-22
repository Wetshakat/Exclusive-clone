import React from 'react'
import { ChevronRight } from 'lucide-react'
import hero1 from '../assets/images/hero1.png' 

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
]

const Hero = () => {
  return (
    <div className="flex px-[5%]  ml-10 mt-[150px] gap-3">
   
      <div className="w-1/5 bg-white p-4">
        <ul className="space-y-3 text-lg ">
          {categories.map((category, idx) => (
            <li 
              key={idx} 
              className="flex justify-between items-center hover:text-blue-600 cursor-pointer"
            >
              <span>{category}</span>
              {idx < 2 && <ChevronRight size={16} />}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="w-3/4 relative">
        <img 
          src={hero1}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Hero
