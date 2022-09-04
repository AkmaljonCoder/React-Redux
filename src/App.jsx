import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import './App.css'
import Users from './components/Users/Users'

const App = () => {
  const [render, setrender] = useState(false)
  return (
    <>
      <Home render={render} setrender={setrender}/>
      <Navbar render={render} setrender={setrender}/>
      <Users render={render} setrender={setrender}/>
    </>
  )
}

export default App