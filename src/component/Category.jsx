import React from 'react'
import jblbox from '../assets/images/jblbox.png'

const Category = () => {
  return (
    <div className=" text-white py-10 w-full px-[5%] ml-[120px]">
    
      {/* <div className="max-w-lg space-y-4">
        <p className="text-green-400 font-semibold text-sm">Categories</p>
        <h1 className="text-3xl sm:text-4xl font-bold">Enhance Your<br />Music Experience</h1>

        
        <div className="flex gap-4 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs text-gray-400">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">05</p>
            <p className="text-xs text-gray-400">Days</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">59</p>
            <p className="text-xs text-gray-400">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">35</p>
            <p className="text-xs text-gray-400">Seconds</p>
          </div>
        </div>

        <button className="mt-6 bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 text-sm">
          Buy Now!
        </button>
      </div> */}

      
      <div className="w-4/5 mt-8 md:mt-0">
        <img src={jblbox} alt="JBL Speaker" className="object-contain" />
      </div>
    </div>
  )
}

export default Category
