import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Doctor from './pages/Home/professions/Doctor/Doctor.jsx';
import Engineer from './pages/Home/professions/Engineer/Engineer.jsx';
import Programmer from './pages/Home/professions/Programmer/Programmer.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* main components */}
      <Header />
      
      {/* links */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctor' element={<Doctor />} />
        <Route path='/engineer' element={<Engineer />} />
        <Route path='/programmer' element={<Programmer />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App