import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const getTimeLeft = (targetDate) => {
  const total = targetDate - new Date().getTime()
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { total, days, hours, minutes, seconds }
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date().getTime() + 4 * 24 * 60 * 60 * 1000
    const timer = setInterval(() => {
      const left = getTimeLeft(targetDate)
      if (left.total > 0) {
        setTimeLeft(left)
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-between items-center px-[5%] py-6 bg-white mt-[100px] rounded-md">
     
      <div className="flex flex-col gap-2">
       
        <div className="flex items-center gap-2">
          <div className="w-3 h-9 bg-red-600 " />
          <span className="text-red-500 text-lg font-semibold">Today's</span>
        </div>

        
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Flash Sales</h2>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={index} className="text-center">
                <div className="text-xs text-black mt-1">{item.label}</div>
              <div className="text-xl font-bold text-black px-3 py-1 rounded-md">
                {String(item.value).padStart(2, '0')}
              </div>
              
            </div>
          ))}
        </div>
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
  )
}

export default Countdown
