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
import Lawyer from './pages/Professions/Lawyer/Lawyer.jsx';
import Business from './pages/Professions/Business/Business.jsx';
import ComputerScience from './pages/Professions/Computer-Science/Computer-Science.jsx';
import Culture from './pages/Professions/Culture/Culture.jsx';
import Diplomacy from './pages/Professions/Diplomacy/Diplomacy.jsx';
import ElectricalEngineering from './pages/Professions/Electrical-Engineering/Electrical-Engineering.jsx';
import GraphicDesign from './pages/Professions/Graphic-Design/Graphic-Design.jsx';
import Medical from './pages/Professions/Medical/Medical.jsx';
import Philology from './pages/Professions/Philology/Philology.jsx';
import Science from './pages/Professions/Science/Science.jsx';
import { ProfessionProvider } from './components/Context/ProfessionsContext.jsx';
import Secret from './pages/Sercret/Secret.jsx';

function App() {
  return (
    <BrowserRouter basename='/'>
      <ProfessionProvider>
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
              <Route path='/professions/business' element={<Business />} />
              <Route path='/professions/computer-science' element={<ComputerScience />} />
              <Route path='/professions/culture' element={<Culture />} />
              <Route path='/professions/diplomacy' element={<Diplomacy />} />
              <Route path='/professions/electrical-engineering' element={<ElectricalEngineering />} />
              <Route path='/professions/graphic-design' element={<GraphicDesign />} />
              <Route path='/professions/medical' element={<Medical />} />
              <Route path='/professions/philology' element={<Philology />} />
              <Route path='/professions/science' element={<Science />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/test' element={<Test />} />
            <Route path='/secret' element={<Secret />} />
          </Routes>

          {/* footer */}
          <Footer />
        </div>
      </ProfessionProvider>
    </BrowserRouter>
  )
}

export default App