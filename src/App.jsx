import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Professions from './pages/Professions/Professions.jsx';
import Test from './pages/Tests/Test.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/AboutUs/About.jsx';
import ScrollToTop from './ScrollAnimation.jsx';
import Journalism from './pages/Professions/Journalism/Journalism.jsx';
import Lawyer from './pages/Professions/Lawyer/Lawyer';

function App() {
  return (
    <BrowserRouter basename='/'>
      <ScrollToTop />
      {/* main components */}
      <div id='website'>
        <Header />
        
        {/* links */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/professions' element={<Professions />} />
            <Route path='/professions/journalism' element={<Journalism />} />
            <Route path='/professions/lawyer' element={<Lawyer />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/test' element={<Test />} />
        </Routes>

        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App