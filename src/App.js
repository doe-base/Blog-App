import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./style/style.css";
import "./style/animations.css"
import Home from "./pages/Home"
import Articles from "./pages/Articles"
import About from "./pages/About";


function App(){

    return(
        <BrowserRouter>
      
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/articles" element={<Articles />} />
                <Route path="/about" element={<About />} />
                <Route path="blog/id" element={<>hello</>} />
            </Routes>
      
        </BrowserRouter>
    )
}
export default App;