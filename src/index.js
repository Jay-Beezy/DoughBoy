import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DoughBoy from "./routes/doughboy";
import './index.css'

require('typeface-shrikhand')

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render( 
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="doughboy" element={<DoughBoy />} />
  </Routes>
</BrowserRouter>
);