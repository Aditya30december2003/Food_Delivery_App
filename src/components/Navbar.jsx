import React from 'react'
import { useState } from 'react'
import {AiOutlineCalculator, AiOutlineMenu, AiOutlineSearch, AiOutlineClose , AiFillTag} from 'react-icons/ai'
import {BsFillCartFill , BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdHelp, MdFavorite} from 'react-icons/md'
import {FaWallet , FaUserFriends} from 'react-icons/fa'

const Navbar = () => {
  const [nav , setNav]= useState(false)
  return (
    <div className="max-w-[1640px] nav flex  justify-between  items-center    h-full px-[2.5rem] py-[0.3rem] mx-auto">

    <div className="left-side  flex space-x-4 items-center text-center">
    <div className="cursor-pointer" onClick={()=> setNav(!nav)}>
        <AiOutlineMenu size={30} />
    </div>
    <h1 className="text-2xl sm:text-2xl lg:text-4xl">
        hostel<span className="font-bold">Eats</span>
    </h1>
    <div className="radio  space-x-3 hidden lg:flex items-center bg-gray-200 rounded-full p-1">
        <p className="cursor-pointer text-white bg-black rounded-full p-1">Delivery</p>
        <p className="cursor-pointer p-1">Pickup</p>
    </div>
    </div>

    <div className="middle flex items-center bg-gray-300 rounded-full p-1 w-[25rem] mx-auto ml-3">
      <AiOutlineSearch size={20} className="cursor-pointer mx-1"/>
    <input type="text" className=' mx-2  w-full outline-none  bg-gray-300 placeholder:italic placeholder:text-gray-500' placeholder='Search food'  />
    </div>

    <div className="right mr-[1rem] hidden md:flex">
    <button className="flex place-items-center w-24 rounded-[0.8rem] bg-black">
    <BsFillCartFill className="ml-2" size={20} color='white'/>
     <p className="px-3 text-white">Cart</p>
    </button>
    </div>

    {/* Mobile Menu */}
    {/* overlay */}
{nav ? <div className="bg-black/80 z-10 fixed w-full h-screen top-0 left-0"></div> :''}
   
    {/* slide drawer menu */}
    <div className={nav ? "fixed top-0 left-0 w-[13rem] h-screen bg-white z-10 duration-500":"fixed top-0 left-[-100%] w-[13rem] h-screen bg-white z-10 duration-300"}>
      <AiOutlineClose size={20} className="cursor-pointer absolute right-2 top-3 " onClick={()=> setNav(!nav)}/>
      <h2 className="mt-2 ml-2 text-2xl">hostel<span className="font-bold">Eats</span></h2>
      <nav>
        <ul className="flex flex-col p-5 space-y-3">
          <li className='flex items-center text-xl cursor-pointer'><TbTruckDelivery className="mr-4" size={20}/> Orders</li>
          <li className='flex items-center text-xl cursor-pointer'><MdFavorite className="mr-4" size={20}/> Favourites</li>
          <li className='flex items-center text-xl cursor-pointer'><FaWallet className="mr-4" size={20}/> Wallet</li>
          <li className='flex items-center text-xl cursor-pointer'><MdHelp className="mr-4" size={20}/> Help</li>
          <li className='flex items-center text-xl cursor-pointer'><AiFillTag className="mr-4" size={20}/> Promotions</li>
          <li className='flex items-center text-xl cursor-pointer'><BsFillSaveFill className="mr-4" size={20}/> Best One</li>
          <li className='flex items-center text-xl cursor-pointer'><FaUserFriends className="mr-4" size={20}/> Invite Friends</li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar
