import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import RealEstate from './pages/RealEstate.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Contact from './pages/Contact.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Weather from './pages/Weather.jsx';
import Autohub from './pages/Autohub.jsx';
import './App.css'
//#d5e9fd;    light
//#237bad    dark
function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ConditionalHeader />
      <Routes>
        <Route element={
          <>
            <Home />
            <section id='about'>
              <About />
            </section>
            <section id='projects'>
              <Project />
            </section>
          </>
        } path='/' />

        <Route element={<RealEstate />} path='/real-estate' />
        <Route element={<Autohub />} path='/autohub' />
        <Route element={<Weather />} path='/weather' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<AboutMe />} path='/about' />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

function ConditionalHeader() {
  const location = useLocation();
  const noHeaderPaths = ['/real-estate', '/contact', '/about','/autohub','/weather'];

  if (noHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return <Header />;
}

export default App
