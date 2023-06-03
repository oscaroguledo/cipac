import React from 'react';
//import { render } from "react-dom";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import cipaclogo from '../media/cipaclogo.svg';
//console.log(cipaclogo)


function mytoggleicon() {
    // toggle btn icon change;
    document.getElementById("toggle").classList.toggle("bi-x-lg");
}
function Header() {  
    let ActiveLink = 'active';
    
    return(
        <header className="app-header">
            <nav className="navbar navbar-expand-md fixed-top d-flex flex-wrap justify-content-center py-3 mb-0 border-bottom">
            <div className="container-fluid m-0 p-0s">
                <a className="navbar-brand" href="#">
                <h1>
                    <img className="bd-placeholder-img logo" src={cipaclogo} aria-hidden="true" />
                </h1>
                </a>
            <a onDoubleClick={mytoggleicon} onClick={mytoggleicon} className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="bi bi-list ms-auto" id="toggle"></span>
            </a>

            <div className=" collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="/" className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className='nav-link'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Engineers" className='nav-link'>Find Engineers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className='nav-link'>Contact Us</Link>
                    </li>
                </ul>
                <span className="m-2">    </span>
                <form className="d-flex ml-1 mr-0 search bg-white" role="search">
                <input className="form-control m-1 enter-search" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-lg btn-outline search border-0 text-dark" type="submit"><i className="bi bi-search"></i></button>
                </form>
            </div>
            </div>
        </nav>
        </header>
    )
}

export default Header;