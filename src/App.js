import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Products from "./pages/Products";
import Support from "./pages/Support";

export default function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/loopstudios" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/careers" element={<Careers />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/support" element={<Support />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
