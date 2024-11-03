//import logo from './logo.svg';//
//import './App.css';//
import React from 'react';
import Navbar from './components/navbar/navbar.js';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotHome from './pages/NotHome/NotHome';
import Landing from './pages/Landing.js';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nothome" element={<NotHome />} />
      </Routes>
    </div>
  );
}

export default App;
