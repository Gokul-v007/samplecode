
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CourseList from "./CourseList";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Login from "./pages/Login";



function App() {

  const [theme,setTheme] =useState('light');
  return (
    <>
      {/* <div className={`c2 ${theme}`}></div> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CourseList id={`c2 ${theme}`} theme={theme} setTheme={setTheme} />} />
            <Route path="/Login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default App;