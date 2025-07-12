import React, { useState } from 'react'

import './App.css'
import Callback from './Callback'

function App() {
  const [color, setcolor] = useState(null)
  const getcolor = (inp) => {
    setcolor(inp)
  }
  return (
    <div className='app'>
      <h2>React function passed from parent to children a prop</h2>
      <div style={{ backgroundColor : `${color}` }}>App</div>
      {/* can pass state function also  */}
      {/* <Callback getcolor={setcolor}/> */}

      {/* can pass normal function also  */}
      <Callback getcolor={getcolor}/>
    </div>
  )
}

export default App
