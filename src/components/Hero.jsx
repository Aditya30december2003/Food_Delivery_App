import React from 'react'

const Hero = () => {
  return (
    <div className="w-full mx-auto p-3">
      <div className="max-h-[95vh] relative bg-red-800">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-500 bg-black/40 flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  px-4 text-white font-bold">The <span className="text-purple-500">Best</span></h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  px-4 text-white font-bold"><span className="text-purple-500">Foods</span> Delivered</h1>
        </div>
        <img className="w-full max-h-[90vh]" src="https://wallpapersmug.com/download/1366x768/ebde76/delicious-pizza-food.jpg" alt=""/>
      </div>
    </div>
  )
}

export default Hero
