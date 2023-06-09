import React from 'react';
//import { render } from "react-dom";
import {Link} from 'react-router-dom';

import cipaclogo from '../media/cipaclogo.svg';
//console.log(cipaclogo)


function mytoggleicon() {
    // toggle btn icon change;
    document.getElementById("toggle").classList.toggle("bi-x-lg");
}

function Header() {  
    // let ActiveLink = 'active';
    
    return(
        <header className="app-header">
            <nav className="navbar navbar-expand-md fixed-top d-flex flex-wrap justify-content-center p-0 mb-0 border-bottom">
                <div className="container-fluid m-0 p-0">
                    <a className="navbar-brand" href="/">
                    <h1>
                        <img className="bd-placeholder-img logo" src={cipaclogo} aria-hidden="true" alt='' />
                    </h1>
                    </a>
                    <button href='/' onDoubleClick={mytoggleicon} onClick={mytoggleicon} className="navbar-toggler btn shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="bi bi-list ms-auto" id="toggle"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0 p-2">
                            <li className="nav-item p-1">
                                <Link to="/" className='nav-link'> Home</Link>
                            </li>
                            <li className="nav-item p-1">
                                <Link to="/about" className="nav-link">About</Link> 
                            </li>
                            <li className="nav-item p-1">
                                <Link to="/services" className='nav-link'>Services</Link>
                            </li>
                            <li className="nav-item p-1">
                                <Link to="/store" className='nav-link'>Store</Link>
                            </li>
                            <li className="nav-item p-1">
                                <Link to="/contact" className='nav-link'>Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown p-1">
                                <button className="nav-link button dropdown-toggle d-flex align-items-center p-0" id="navbarDropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="img rounded-circle"
                                        height="45" alt="profile" loading="lazy" />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="/">My profile</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Settings</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">Logout</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <span className="m-2">    </span>
                        <form className=" d-flex ml-1 mr-0 search bg-white" role="search">
                            <input className="form-control enter-search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline search border-0 text-dark" type="submit">
                                <i className="bi bi-search ms-auto"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;