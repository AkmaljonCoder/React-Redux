import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import './App.css'

const App = () => {
  const [render, setrender] = useState(false)
  return (
    <>
      <Navbar render={render} setrender={setrender}/>
      <Home render={render} setrender={setrender}/>
    </>
  )
}

export default App