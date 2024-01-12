import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from './components/Homepage.js';
import { RoomPage } from './components/Room.js';
function App() {

  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Homepage />} />
        <Route path='/room' element={<RoomPage />} />
      </Routes>
    </Router>
  )
}

export default App
