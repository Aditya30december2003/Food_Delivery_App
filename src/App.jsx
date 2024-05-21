import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Bottom from './components/Bottom'
import { Route , Routes } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Home from './Pages/Home'
import Pizza from './components/Pizza'
import Burger from './components/Burger'
import Rolls from './components/Rolls'
import North from './components/North'
import Shakes from './components/Shakes'
import Chinese from './components/Chinese'
import SignUpNow from './components/SignUpNow'
import Cart from './components/Cart'
import ShopContextProvider from './context/shop-context'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShopContextProvider>
        <Navbar />
        <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path='/pizza' element={<Pizza />} />
        <Route path='/burger' element={<Burger />} />
        <Route path='/rolls' element={<Rolls />} />
        <Route path='/north' element={<North />} />
        <Route path='/shake' element={<Shakes />} />
        <Route path='/chinese' element={<Chinese />} />
        <Route path='/signupNow' element={<SignUpNow />} />
        <Route path='/Cart' element={<Cart/>} />
        </Routes>
        <Bottom />
    </ShopContextProvider>
    </>
  )
}

export default App


