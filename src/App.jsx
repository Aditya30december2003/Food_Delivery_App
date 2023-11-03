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


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Routes>
        <Route path='/Food_Delivery_App/signup' element={<SignUp />} />
        <Route path='/Food_Delivery_App' element={<Home />} />
        <Route path='/Food_Delivery_App/pizza' element={<Pizza />} />
        <Route path='/Food_Delivery_App/burger' element={<Burger />} />
        <Route path='/Food_Delivery_App/rolls' element={<Rolls />} />
        <Route path='/Food_Delivery_App/north' element={<North />} />
        <Route path='/Food_Delivery_App/shake' element={<Shakes />} />
        <Route path='/Food_Delivery_App/chinese' element={<Chinese />} />
        <Route path='/Food_Delivery_App/signupNow' element={<SignUpNow />} />
        </Routes>
        <Bottom />
    </>
  )
}

export default App


