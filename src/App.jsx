import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element = {<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App
