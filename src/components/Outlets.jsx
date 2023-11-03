import React from 'react'
import dialog from '../assets/imgs/dialog.png'
import jb from '../assets/imgs/jb.png'

const Outlets = () => {
  return (
    <div className='max-w-[75rem] mx-auto mt-10 mb-20'>
      {/* header */}
      <div>
        <h1 className='font-bold md:text-[1.5rem] text-[1.3rem] text-center md:text-left'>Top Outlets</h1>
      </div>

      {/* crousel */}
      <div className='mt-10 mx-auto'>
        <ul className='grid grid-cols-1 md:grid-cols-6 gap-6'>
          <li className='flex items-center sm:w-full bg-gray-200 md:bg-white w-full'>
            <img className='cursor-pointer w-52 md:w-40  p-2 rounded-[100%]' src="https://www.uengage.in/images/addo/logos/logo-6670-1644911190.jpeg" alt="" />
            <p className='md:hidden text-[1.3rem] font-bold  text-center w-full'>Burger Farm</p>
          </li>
          <li className='flex items-center sm:w-full bg-gray-200 md:bg-white w-full'>
            <img className='cursor-pointer w-52 md:w-40 p-2 rounded-[100%]' src="https://www.nestle.com/sites/default/files/nescafe-logo-square.png" alt="" />
            <p className='md:hidden text-[1.3rem] font-bold text-center w-full'>Nescafe</p>
          </li>
          <li className='flex items-center sm:w-full bg-gray-200 md:bg-white w-full'>
            <img className='cursor-pointer  w-40 md:w-24 ml-2 mt-5  p-2 ' src='https://i.insider.com/57b231c1db5ce94f008b6df4?width=750&format=jpeg&auto=webp' alt="" />
            <p className='md:hidden text-[1.3rem] font-bold text-center w-full'>Subway</p>
          </li>
          <li className='flex items-center sm:w-full bg-gray-200 md:bg-white w-full'>
            <img className='cursor-pointer w-52 md:w-40  p-2 rounded-[100%]' src={dialog} alt="" />
            <p className='md:hidden text-[1.3rem] font-bold text-center w-full'>Dialog</p>
          </li>
          <li className='flex items-center sm:w-full bg-gray-200 md:bg-white w-full'>
            <img className='cursor-pointer w-52 md:w-40  p-2' src={jb} alt="" />
            <p className='md:hidden text-[1.3rem] font-bold text-center w-full'>Jaipur Bakers</p>
          </li>
          <li className='flex items-center sm:w-full bg-gray-200 md:bg-white w-full'>
            <img className='cursor-pointer w-52 md:w-40 mt-5 p-2 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Amul_official_logo.svg/2560px-Amul_official_logo.svg.png" alt="" />
            <p className='md:hidden text-[1.3rem] font-bold text-center w-full'>Amul</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Outlets
