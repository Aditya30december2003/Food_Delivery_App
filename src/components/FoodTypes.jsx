import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Maggie from '../assets/imgs/Maggie.png'

const FoodTypes = () => {
  return (
    <div className='max-w-[75rem] mx-auto mt-10'>
      {/* header */}
      <div>
        <h1 className='font-bold md:text-[1.5rem] text-[1.3rem] text-center md:text-left'>What would you like to eat?</h1>
      </div>

      {/* crousel */}
      <div className='mt-10 mx-auto'>
        <ul className='grid grid-cols-3 md:grid-cols-6'>
          <NavLink to='/Food_Delivery_App/pizza'>
          <li>
            <img className='cursor-pointer w-40' src="https://img.freepik.com/premium-photo/pizza-isolate-white-background-generative-ai_74760-2619.jpg" alt="" />
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/burger'>
          <li>
            <img className='cursor-pointer w-40' src="https://static.vecteezy.com/system/resources/previews/022/598/687/original/tasty-beef-burger-png.png" alt="" />
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/rolls'>
          <li>
            <img className='cursor-pointer w-36' src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png" alt="" />
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/north'>
          <li>
            <img className='cursor-pointer w-40' src="https://www.farmboy.ca/wp-content/uploads/2021/05/butter-chicken.png" alt="" />
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/shake'>
          <li>
            <img className='cursor-pointer w-40' src='https://static.vecteezy.com/system/resources/previews/024/041/496/original/3d-render-of-strawberry-shake-glass-with-whipped-cream-dripping-chocolate-syrup-element-png.png' alt="" />
          </li>
          </NavLink>
          <NavLink to='/Food_Delivery_App/chinese'>
          <li>
            <img className='cursor-pointer w-40' src="https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-fresh-steam-momos-png-image_6583751.png" alt="" />
          </li>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default FoodTypes
