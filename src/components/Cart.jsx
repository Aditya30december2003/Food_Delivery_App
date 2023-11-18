import React , {useContext , useState} from 'react'
import {data} from '../Data/data'
import { ShopContext } from '../context/shop-context'
import { FaPlusCircle ,  FaMinusCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";

const Cart = () => {
const {cartItems , addToCart , removeFromCart} = useContext(ShopContext)
const [best , setBests ] = useState(data);

  return (
    <div className='max-w-[1180px] mx-auto'>
      <div>
      <h1 className='text-[2.5rem] mt-[1rem] font-bold'>Your Cart Items</h1>
      </div>

      <div className="classItems">
       {data.map((product)=>{
        if(cartItems[product.id] != 0){
       return <div className='border shadow-lg mb-0 mt-5 flex w-full justify-between'>
        <div className='w-1/3'>
        <img src={product.image} alt={product.name} className='object-cover cursor-pointer md:w-full h-[5rem] md:h-[9rem] rounded-t-lg' />
        </div>
        <div className='mx-auto my-auto text-[0.8rem] md:text-[2rem]'>
          <p className='font-bold mx-2'>{product.name}</p>
        </div>
        <div className='amount font-bold flex m-auto justify-between items-center gap-5'>
         <div className='cursor-pointer text-[1.3rem] font-bold' onClick={() => removeFromCart(product.id)}>
         <FaMinusCircle/>
         </div>
         <input type="text" className='mx-auto w-10 text-center outline-none' value={cartItems[product.id]}/>
         <div className='cursor-pointer text-[1.3rem] font-bold' onClick={() => addToCart(product.id)}>
         <FaPlusCircle />
         </div>
        </div>
      </div>
        }
       })}
      </div>
      
      <div className='text-center items-center mx-auto my-5 flex flex-col gap-2 md:flex-row md:gap-10 mt-20'>
      <button className=' bg-purple-500 border-none rounded-sm text-white w-1/2 md:w-2/3'>Checkout</button>
      <NavLink to='/Food_Delivery_App/' className=' bg-purple-500 border-none rounded-sm text-white w-1/2 md:w-2/3'>
      <button className='border-none'>Continue Discovering</button>
      </NavLink>
     </div>
    </div>
  )
}

export default Cart
