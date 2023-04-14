import React from 'react';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DoughBoy from "./routes/doughboy";
import './index.css'
import { BrowserRouter } from "react-router-dom"

require('typeface-shrikhand')

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render( 
  /*
  <HashRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/doughboy" element={<DoughBoy />} />
    </Routes>
  </HashRouter>
  */
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>

);