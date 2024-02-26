//client/src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/home';
import LandingPage from './pages/landing/landingPage';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route exact path='home' element={<Home/>} />
      </Routes>
     
    </div>
  );
}

export default App;
