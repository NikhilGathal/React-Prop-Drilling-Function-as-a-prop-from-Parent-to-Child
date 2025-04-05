import React, { useState } from 'react'

import './App.css'
import Callback from './callback'
function App() {
  const [color, setcolor] = useState(null)
  const getcolor = (inp) => {
    setcolor(inp)
  }
  return (
    <div className='app'>
      <h2>React function passed from parent to children a prop</h2>
      <div style={{ backgroundColor : `${color}` }}>App</div>
      <Callback getcolor={getcolor}/>
    </div>
  )
}

export default App
