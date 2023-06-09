import React, { Component } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import './App.css';

import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Engineers from "./pages/Engineers";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


export default class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Router>
      <div className="App">
          <Header />
          <Routes>
              <Route exact path="/" element={<Home/>} > </Route>
              <Route exact path="/About" element={<About/>} ></Route>
              <Route exact path="/Services" element={<Services/>} ></Route>
              <Route exact path="/Engineers" element={<Engineers/>} ></Route>
              <Route exact path="/Contact" element={<Contact/>} ></Route>
          </Routes>
          <Footer />
      </div>
      </Router>
    );
  }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);
