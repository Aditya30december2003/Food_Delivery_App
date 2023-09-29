import React,{useState} from 'react'
import {data} from '../Data/data'

const Food = () => {
    // console.log(data)

    const [foods , setFoods ] = useState(data);

    // filterType
    const filterType=(category)=>{
      setFoods(
        data.filter((item)=>{
          return item.category===category;
        })
      )
    }

    // filterPrice
    const filterPrice=(price)=>{
      setFoods(
        data.filter((item)=>{
          return item.price===price;
        })
      )
    }


  return (
    <div className="max-w-[75rem] mx-auto px-4 py-12">
      <h1 className="text-purple-500 font-bold text-4xl text-center">Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row lg:justify-between py-10'>
        {/* filter type */}
        <div>
            <p className="font-bold">Filter Type</p>
            <div className='py-2 flex  flex-row lg:justify-evenly flex-wrap'>
                <button onClick={()=> setFoods(data)} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 my-2 w-[4.7rem] font-bold hover:text-white hover:bg-purple-500'>All</button>
                <button onClick={()=> filterType('burger')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 my-2 w-[4.7rem] font-bold hover:text-white hover:bg-purple-500'>Burgers</button>
                <button onClick={()=> filterType('pizza')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 my-2 w-[4.7rem] font-bold hover:text-white hover:bg-purple-500'>Pizzas</button>
                <button onClick={()=> filterType('salad')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 my-2 w-[4.7rem] font-bold hover:text-white hover:bg-purple-500'>Salads</button>
                <button onClick={()=> filterType('chicken')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 my-2 w-[4.7rem] font-bold hover:text-white hover:bg-purple-500'>Chicken</button>
            </div>
         </div>
         {/* filter price */}
         <div>
            <p className='font-bold'>Filter Type</p>
            <div className='py-2 flex flex-row lg:justify-evenly flex-wrap'>
            <button onClick={()=> filterPrice('$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹</button>
            <button onClick={()=> filterPrice('$$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹₹</button>
            <button onClick={()=> filterPrice('$$$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹₹₹</button>
            <button onClick={()=> filterPrice('$$$$')} className='rounded-[0.4rem] border-purple-500 text-purple-500 mx-1 w-[4.7rem] font-bold my-2 hover:text-white hover:bg-purple-500'>₹₹₹₹</button>
            </div>
         </div>


      </div>

       { /* Display Images*/}
       <div className='grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-6 pt-6 cursor-pointer'>
         {foods.map((item,index)=>(
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-t-lg'>
            <img src={item.image} alt={item.name} className='w-full h-[12rem] object-cover  rounded-t-lg' />
            <div className='flex justify-between py-3'>
              <p className='font-bold mx-2'>{item.name}</p>
              <p className='bg-purple-500 mr-2 rounded-md text-white'>
                <span className='p-2'>{item.price}</span>
              </p>
            </div>
          </div>
         ))}
       </div>


    </div>
  )
}

export default Food

