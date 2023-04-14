import React from 'react';
import './App.css'
import DoughBoy from './routes/doughboy';
import Navbar from "./Navbar";
import About from "./routes/About";
import Converter from "./routes/Converter"
import {Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<DoughBoy />} />
          <Route path="/About" element={<About />} />
          <Route path="/Converter" element={<Converter />} />
        </Routes>
      </div>
    </>
    //<DoughBoy>
    //</DoughBoy>
  );
}