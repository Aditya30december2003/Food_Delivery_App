import React from 'react'
import Hero from '../components/Hero'
import HeadlineCards from '../components/HeadlineCards'
import Food from '../components/food'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import FoodTypes from '../components/FoodTypes'
import Outlets from '../components/Outlets'
import BestFood from '../components/BestFood'


const Home = () => {
  return (
    <>
    
    <Hero/>
    <FoodTypes />
    <Outlets />
    <BestFood />
    </>
  )
}

export default Home
