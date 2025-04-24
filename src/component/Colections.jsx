import React from 'react';
import batrrys from '../assets/images/batrrys.png';
import qqqq from '../assets/images/qqqq.png';
import queen from '../assets/images/queen.jpeg';
import pefume from '../assets/images/pefume.png';

const Collections = () => {
  return (
    <section className=" px-6 py-12 max-w-screen-xl mx-auto">
      <p className="text-red-500 font-semibold">Featured</p>
      <h2 className="text-3xl font-bold mb-8">New Arrival</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="relative rounded bg-black overflow-hidden">
          <img src={qqqq} alt="PlayStation 5" className="w-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-semibold">PlayStation 5</h3>
            <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
            <button className="mt-2 text-sm underline">Shop Now</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="relative bg-black rounded overflow-hidden col-span-2 sm:col-span-2">
            <img src={queen} alt="Women's Collections" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-sm">Featured women collections that give you another vibe.</p>
              <button className="mt-2 text-sm underline">Shop Now</button>
            </div>
          </div>

          
          <div className="relative bg-black rounded overflow-hidden">
            <img src={batrrys} alt="Speakers" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Speakers</h3>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="mt-2 text-sm underline">Shop Now</button>
            </div>
          </div>

          
          <div className="relative bg-black rounded overflow-hidden">
            <img src={pefume} alt="Perfume" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">Perfume</h3>
              <p className="text-sm">GUCCI INTENSE OUD EDT</p>
              <button className="mt-2 text-sm underline">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
