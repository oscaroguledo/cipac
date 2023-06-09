import React from 'react';
import {Link} from 'react-router-dom';

function backtotop(){
    // 👇️ scroll to top of page
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    console.log(window.top)
    }

    export default class About extends React.Component {
        state = {
            about: [],
            message:""
          }
        
          componentDidMount() {
            let data;
            axios.get(`http://127.0.0.1:8000/about/`)
              .then(res => {
                data = res.data;
                this.setState(
                    { 
                        about:[data.response],
                        message:data.message
                    }
                );
              })
          }
    
        render(){
            return(
            <div className="app-footer">
                <footer className="container-fluid footer">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3 mt-3 footer-class">
                        <h5 className="highlight m-3">Quick Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to="/" className='nav-link'>Home</Link></li>
                            <li className="nav-item mb-2"><Link to="/About" className='nav-link'>About</Link></li>
                            <li className="nav-item mb-2"><Link to="/services" className='nav-link'>Services</Link></li>
                            <li className="nav-item mb-2"><a href="/store" className="nav-link">Store</a></li>
                            
                        </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3 mt-3">
                        <h5 className="highlight m-3">Extras</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link">subsidiries</a></li>
                            <li className="nav-item mb-2"><Link to="/contact" className='nav-link'>Contact Us</Link></li>
                            
                        </ul>
                        </div>


                        <div className="col-md-5 offset-md-1 mb-3 mt-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2 search">
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-primary text-body" type="button">Subscribe
                            </button>
                            </div>
                        </form>
                        <ul className="nav flex-row d-flex p-2">
                            <li className="nav-item mb-2"><a href="/" className="social-link"><i className="bi bi-twitter m-2"></i></a></li>
                            <li className="nav-item mb-2"><a href="/" className="social-link"><i className="bi bi-facebook m-2"></i></a></li>
                            <li className="nav-item mb-2"><a href="/" className="social-link"><i className="bi bi-whatsapp m-2"></i></a></li>
                            <li className="nav-item mb-2"><a href="/" className="social-link"><i className="bi bi-linkedin"></i></a></li>
                            <li className="nav-item mb-2"><a href="/" className="social-link"><i className="bi bi-instagram"></i></a></li>
                            <li className="nav-item mb-2"><a href="/" className="social-link p-0"><i className="bi bi-telegram m-2"></i></a></li>
                        </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-2  border-top">
                        <p className="text-white">&copy; 2023 Cipac. All rights reserved.</p>

                    </div>
                </footer>
                <button  onClick={backtotop} className="back-to-top active rounded-3 d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short"></i>
                </button>

                
            </div>
        )
    }
}