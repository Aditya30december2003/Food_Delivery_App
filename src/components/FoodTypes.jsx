import React , {useEffect} from 'react'
import { NavLink} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Indian from '../assets/imgs/Indian.png'
import Chinese from '../assets/imgs/chinese.png'
import Shakes from '../assets/imgs/shakes.png'
import Rolls from '../assets/imgs/roll.png'
import Burger from '../assets/imgs/burger.png'

const FoodTypes = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='max-w-[75rem] mx-auto mt-10'>
      {/* header */}
      <div>
        <h1 className='font-bold md:text-[2rem] text-purple-500 text-[1.3rem] text-center md:text-left'>What would you like to eat?</h1>
      </div>

      {/* crousel */}
      <div className='mt-10 mx-auto'>
        <ul className='grid grid-cols-2 gap-10 md:flex md:items-center md:gap-6'>
          <NavLink to='/Food_Delivery_App/pizza' data-aos="zoom-in" data-aos-duration="1500">
          <li className='flex flex-col items-center'>
            <img className='cursor-pointer w-40' src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg" alt="" />
            <p className='font-bold text-[1rem] md:text-[1.3rem] text-purple-500'>Pizza</p>
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/burger' data-aos="zoom-in" data-aos-duration="1500">
          <li className='flex flex-col items-center'>
            <img className='cursor-pointer w-[9rem]' src={Burger} alt="" />
            <p className='font-bold text-[1rem] md:text-[1.3rem] mt-2  text-purple-500'>Burger</p>
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/rolls' data-aos="zoom-in" data-aos-duration="1500">
          <li className='flex flex-col items-center'>
            <img className='cursor-pointer w-[12rem]' src={Rolls} alt="" />
            <p className='font-bold text-[1rem] md:text-[1.3rem] mt-3  text-purple-500'>Kathi Rolls</p>
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/north' data-aos="zoom-in" data-aos-duration="1500">
          <li className='flex flex-col items-center'>
            <img className='cursor-pointer w-[13rem]' src={Indian} alt="" />
            <p className='font-bold text-[1rem] md:text-[1.3rem] mt-2  text-purple-500'>North Indian</p>
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/shake' data-aos="zoom-in" data-aos-duration="1500">
          <li className='flex flex-col items-center'>
            <img className='cursor-pointer w-[10rem]' src={Shakes} alt="" />
            <p className='font-bold text-[1rem] md:text-[1.3rem] mt-2  text-purple-500'>Desserts</p>
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/chinese' data-aos="zoom-in" data-aos-duration="1500">
          <li className='flex flex-col items-center'>
            <img className='cursor-pointer w-[9.56rem]' src={Chinese} alt="" />
            <p className='font-bold text-[1rem] md:text-[1.3rem] mt-2  text-purple-500'>Chinese</p>
          </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default FoodTypes
