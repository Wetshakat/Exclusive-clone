import React from 'react'
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-[5%] py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-3">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-xs mb-4">Get 10% off your first order</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-sm w-full rounded-l bg-transparent border border-white placeholder-white"
            />
            <button
              type="submit"
              className="px-3 py-2 text-sm bg-white text-black rounded-r"
            >
              ➤
            </button>
          </form>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-3">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mt-2 flex items-center gap-1">
            <Mail size={14} /> exclusive@gmail.com
          </p>
          <p className="text-sm mt-1 flex items-center gap-1">
            <Phone size={14} /> +88015-88888-9999
          </p>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-3">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-3">Download App</h3>
          <p className="text-sm mb-3">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Qr-2.png" alt="QR" className="w-12 h-12" />
            <div className="space-y-2 text-xs">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Available_on_the_App_Store_(black)_SVG.svg"
                alt="App Store"
                className="h-6"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-12">
        © Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
