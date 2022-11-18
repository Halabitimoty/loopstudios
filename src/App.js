import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Products from "./pages/Products";
import Support from "./pages/Support";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
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
