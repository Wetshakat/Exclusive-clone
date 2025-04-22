import React from 'react'
import { ArrowLeft, ArrowRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from 'lucide-react'

const categories = [
  { label: 'Phones', icon: Smartphone },
  { label: 'Computers', icon: Monitor },
  { label: 'SmartWatch', icon: Watch },
  { label: 'Camera', icon: Camera },
  { label: 'HeadPhones', icon: Headphones },
  { label: 'Gaming', icon: Gamepad }
]

const Brows = () => {
  return (
    <div className="px-[5%] py-10 bg-white">
   
      <div className="flex justify-between items-center mb-6">
       
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-8 bg-red-500 rounded-sm"></div>
            <span className="text-red-500 text-sm font-semibold">Categories</span>
          </div>
          <h2 className="text-2xl font-bold">Browse By Category</h2>
        </div>

       
        <div className="flex gap-2">
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowLeft size={18} />
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border w-[200px] h-[150px] rounded-md p-4 hover:shadow-md cursor-pointer transition"
          >
            <cat.icon size={28} className="mb-2 text-gray-800" />
            <span className="text-sm font-medium">{cat.label}</span>
          </div>
        ))}
      </div>

      
      <div className="border-t mt-8"></div>
    </div>
  )
}

export default Brows
