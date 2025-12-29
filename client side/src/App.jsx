import { useState } from 'react'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Settings from './pages/Settings.jsx';
import Profile from './pages/Profile.jsx';

import './App.css'

function App() {
  

  return (
    <Routes>

      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/profile' element={<Profile />} />

      
      </Routes>
  )
}

export default App
