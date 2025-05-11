import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Professions from './pages/Professions/Professions.jsx';
import Requests from './pages/Requests/Requests.jsx';
import Test from './pages/Tests/Test.jsx';
import Doctor from './pages/Professions/Doctor/Doctor.jsx';
import Engineer from './pages/Professions/Engineer/Engineer.jsx';
import Programmer from './pages/Professions/Programmer/Programmer.jsx';
import Footer from './components/Footer/Footer.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import About from './pages/AboutUs/About.jsx';
import Calendar from './pages/Calendar/Calendar.jsx';
import Video from './pages/Video/Video.jsx';
import Info from './pages/CourseInfo/Info.jsx';
import ScrollToTop from './ScrollAnimation.jsx';

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
          <Route path='/professions' element={<Professions />}>
            <Route path='doctor' element={<Doctor />} />
            <Route path='engineer' element={<Engineer />} />
            <Route path='programmer' element={<Programmer />} />
          </Route>
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/test' element={<Test />} />
          <Route path='/video' element={<Video />} />
          <Route path='/info' element={<Info />} />
        </Routes>

        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App