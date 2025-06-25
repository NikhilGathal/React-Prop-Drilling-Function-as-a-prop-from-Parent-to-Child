import React, { useState } from 'react'
import './App.css'
function Callback({getcolor}) {
    const[inp , setinp] = useState("")
    const handlechange =(e)=> 
    {
        setinp(e.target.value)
        getcolor(e.target.value)
    }
  return (
   
    <input placeholder='Enter color' type="text" value={inp}
    onChange={handlechange}
    name="" id="" />

  )
}

export default Callback