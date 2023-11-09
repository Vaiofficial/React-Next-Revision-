
"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

   const {id} = params; //extracting id property from params.
   const [value, setvalue] = useState([])
   const getusers = async()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
    setvalue(data);
   }

   useEffect(() => {
    getusers()
   }, [])

  return<> {JSON.stringify(value)}</>
}

export default page