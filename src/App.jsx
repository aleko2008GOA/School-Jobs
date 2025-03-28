import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Professions from './pages/Professions/Professions.jsx';
import Requests from './pages/Requests/Requests.jsx';
import Test from './pages/Tests/Test.jsx';
import Doctor from './pages/Professions/Doctor/Doctor.jsx';
import Engineer from './pages/Professions/Engineer/Engineer.jsx';
import Programmer from './pages/Professions/Programmer/Programmer.jsx';

function App() {
  return (
    <BrowserRouter basename='/'>
      {/* main components */}
      <Header />
      
      {/* links */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/professions' element={<Professions />}>
          <Route path='doctor' element={<Doctor />} />
          <Route path='engineer' element={<Engineer />} />
          <Route path='programmer' element={<Programmer />} />
        </Route>
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/requests' element={<Requests />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App