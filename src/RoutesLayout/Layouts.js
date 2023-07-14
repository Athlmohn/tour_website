import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Navmenu from '../components/NavMenu/Navmenu'
import Home from '../Pages/Home/Home'
import Gallery from '../Pages/Gallery/Gallery'
import Contact from '../Pages/Contact/Contact'
import Footer from '../components/Footer/Footer'
function Layouts() {
  return (
    <Router>
        <Navbar/>
        <Navmenu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/tour_website" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Layouts