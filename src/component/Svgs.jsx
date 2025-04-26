import React from 'react'
import { Truck, Headphones, CheckCircle } from 'lucide-react' // Optional: use your own icons

const Svgs = () => {
  // const handleCardIconClick = () => {
  //   setShowProducts(!showProducts) 
  // }

  const services = [
    {
      icon: <Truck size={28} className="text-white" />,
      title: 'FREE AND FAST DELIVERY',
      subtitle: 'Free delivery for all orders over $140',
    },
    {
      icon: <Headphones size={28} className="text-white" />,
      title: '24/7 CUSTOMER SERVICE',
      subtitle: 'Friendly 24/7 customer support',
    },
    {
      icon: <CheckCircle size={28} className="text-white" />,
      title: 'MONEY BACK GUARANTEE',
      subtitle: 'We return money within 30 days',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 px-[5%] bg-white">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg ring-4 ring-gray-300">
            {service.icon}
          </div>
          <h3 className="font-semibold text-sm">{service.title}</h3>
          <p className="text-gray-500 text-sm">{service.subtitle}</p>
        </div>
      ))}
    </div>
  )
}

export default Svgs
