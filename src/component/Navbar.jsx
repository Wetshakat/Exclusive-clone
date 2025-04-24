import React, { useState, useEffect, useRef } from 'react';
import { User, Heart, ShoppingCart, LogOut, Package, XCircle, Star } from 'lucide-react';

const Navbar = ({ cartCount, toggleCartVisibility }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="bg-black text-white text-sm py-2 px-[5%] flex justify-between items-center">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{' '}
          <span className="underline cursor-pointer">ShopNow</span>
        </p>
        <span className="cursor-pointer">English ▼</span>
      </div>

      <div className="w-full bg-white shadow-sm py-4 px-[5%] flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Exclusive</div>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Sign Up</li>
        </ul>

        <div className="flex items-center gap-4 relative" ref={dropdownRef}>
          <div className="hidden md:flex items-center px-3 py-1 bg-gray-100 rounded-md w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent w-full outline-none text-sm"
            />
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>

          <Heart className="w-5 h-5 text-gray-700 cursor-pointer" />

          <div className="relative">
            <ShoppingCart
              className="w-5 h-5 text-gray-700 cursor-pointer"
              onClick={() => toggleCartVisibility()} // Toggle visibility of cart
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className="bg-red-600 p-2 rounded-full cursor-pointer z-50"
          >
            <User className="w-4 h-4 text-white" />
          </div>

          {isOpen && (
            <div className="absolute top-full right-0 mt-3 w-60 bg-gray-900 text-white py-4 rounded-xl shadow-lg z-40">
              <ul className="px-4 space-y-2">
                <DropdownItem icon={<User className="w-4 h-4" />} label="Manage My Account" />
                <DropdownItem icon={<Package className="w-4 h-4" />} label="My Order" />
                <DropdownItem icon={<XCircle className="w-4 h-4" />} label="My Cancellations" />
                <DropdownItem icon={<Star className="w-4 h-4" />} label="My Reviews" />
                <DropdownItem icon={<LogOut className="w-4 h-4" />} label="Logout" />
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const DropdownItem = ({ icon, label }) => (
  <li className="flex items-center gap-3 py-2 hover:bg-white/10 hover:text-gray-200 transition-colors cursor-pointer rounded-md">
    {icon}
    {label}
  </li>
);

export default Navbar;
