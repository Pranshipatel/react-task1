import React from 'react'
import Img from './components/Img'
import Navbar from './components/Navbar'
import Full from './components/Full'

const App = () => {
  return (
    <div className='w-full h-screen overflow-hidden bg-black'>
      <Full />
      <Navbar />
      <Img />
    </div>
  )
}

export default App
