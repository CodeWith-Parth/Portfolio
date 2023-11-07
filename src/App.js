import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Navbar />
    
     
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      
    </>
  );
}

export default App;
