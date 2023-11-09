"use client"

import { MyContext } from '@/Helper/Context'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

   const name  = useContext(MyContext)
   console.log(name);
   const [value, setvalue] = useState([])
   const getusers = async()=>{

    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    setvalue(data);
   }

   useEffect(() => {
    getusers()
   }, [])

   const success = ()=>{

    toast("hooray")
    console.log("hogya success");
   }
   
  
  return (
    <div>
      <ToastContainer />
      <button onClick={getusers} className='bg-green-700 text-white font-bold px-8 py-5 rounded-md'>Click here</button>
      <button className='bg-red-500 text-white font-bold px-8 py-5 rounded-md mx-8' onClick={success}>Jaadu</button>

      <h1 className='bg-yellow-200 text-black'>{name}</h1>
      <div className='bg-gray-300 w-full h-2/3 mt-10'>
        <ul>
          {value.map((e)=>{
            return <li>{e.username} ---- <a href={`/${e.id}`}>Explore</a></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default page