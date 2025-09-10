

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { useState } from "react";
// import About from "./Pages/About";
// import Loign from "./Pages/Loign";
import  Destination from "./pages/Destination"
import  Destinationdetails from "./pages/Destinationdetails"

function Main() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <div className={`c2 ${theme}`}></div>
      <Navbar theme={theme} setTheme={setTheme} />
        <BrowserRouter>
          <Routes>
            {/* <Route path="#" element={<Navbar />} /> */}
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/login" element={<Login/>} />
            <Route path="/destination" element={<Destination/>}/>
            <Route path="/destinationdetails" element={<Destinationdetails/>}/>
          </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default Main;