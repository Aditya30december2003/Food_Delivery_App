import React , {createContext , useState} from 'react'
export const ShopContext = createContext(null);
import {data} from '../Data/data'

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

const shopContextProvider = (props) => {
    const [cartItems , setCartItems] = useState(getDefaultCart());
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    };
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    };
    const contextValue={cartItems , addToCart , removeFromCart};
    console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default shopContextProvider;
