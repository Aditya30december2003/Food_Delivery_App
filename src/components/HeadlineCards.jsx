import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[75rem] mx-auto p-4 py-12 grid md:grid-cols-3 lg:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='bg-black/40 absolute w-full h-full rounded-xl text-white font-bold'>
         <p className='p-2 text-[1.3rem]'>Sun's Out , BOGO's Out</p>
         <p className='p-2'>Through 8/26</p>
         <button className='bg-white text-black bottom-1 ml-2  rounded-xl'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/14537687/pexels-photo-14537687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>

      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='bg-black/40 absolute w-full h-full rounded-xl text-white font-bold'>
         <p className='p-2 text-[1.3rem]'>New Restaurents</p>
         <p className='p-2'>Added daily</p>
         <button className='bg-white text-black bottom-1 ml-2  rounded-xl'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>

      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay */}
        <div className='bg-black/40 absolute w-full h-full rounded-xl text-white font-bold'>
         <p className='p-2 text-[1.3rem]'>We Deliver Desserts Too</p>
         <p className='p-2'>Tasty Treats</p>
         <button className='bg-white text-black bottom-1 ml-2 rounded-xl'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full rounded-xl object-cover' src="https://images.pexels.com/photos/14043667/pexels-photo-14043667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </div>
  )
}

export default HeadlineCards
