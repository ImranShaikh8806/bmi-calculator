import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Profile from './Profile/Profile'
import Resul from './Profile/Resul'
import './style.css'

function App() {


  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Profile/>} />
      <Route path='/result' element={<Resul/>} />
    </Routes>
   </Router>
    </>
  )
}

export default App
