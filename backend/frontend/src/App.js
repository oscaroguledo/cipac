import React from "react";
// import { render } from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
        <Router>
          <Header />
          <Routes>
              <Route exact path="/" element={<Home/>} > </Route>
              <Route exact path="/about" element={<About/>} ></Route>
              <Route exact path="/services" element={<Services/>} ></Route>
              <Route exact path="/store" element={<Store/>} ></Route>
              <Route exact path="/contact" element={<Contact/>} ></Route>
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
