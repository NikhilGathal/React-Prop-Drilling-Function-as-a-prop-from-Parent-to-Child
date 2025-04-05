import React, { useState } from 'react'
import './App.css'
function Callback({getcolor}) {
    const[inp , setinp] = useState(null)
    const handlechange =(e)=> 
    {
      console.log(e.target.value);
      
        const {value} = e.target
        setinp(value)
        getcolor(value)
    }
  return (
   
    <input placeholder='Enter color' type="text" value={inp}
    onChange={handlechange}
    name="" id="" />

  )
}

export default Callback