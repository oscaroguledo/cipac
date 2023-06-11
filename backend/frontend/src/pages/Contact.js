import React from 'react';
import axios from 'axios';
import undraw_contact from '../media/tech/undraw-contact.png';

export default class Contact extends React.Component {
    state = {
        contact: [],
        message:""
      }
    
      componentDidMount() {
        let data;
        axios.get(`http://127.0.0.1:8000/contact`)
          .then(res => {
            data = res.data;
            this.setState(
                { 
                    contact:[data.response],
                    message:data.message
                }
            );
          })
      }

    render(){
        return (
            <div className='contact mt-4'>
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title mt-4">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="row content justify-content-center">
                            <div className="col-md-6">
                                <h3 className="heading mb-4">Let's talk about everything!</h3>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center mb-2">
                                            <div className="icon p-1 d-flex align-items-center justify-content-center">
                                                <span className="fas fa-location-dot"></span>
                                            </div>
                                            <div className="text">
                                                {this.state.contact.map(contact =><p key=''>{contact.address}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="dbox w-100 text-center mb-2">
                                            <div class="icon p-1 d-flex align-items-center justify-content-center">
                                                <span class="fa fa-phone"></span>
                                            </div>
                                            <div class="text">
                                                {this.state.contact.map(contact =><p key=''>{contact.phone}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dbox w-100 text-center mb-2">
                                            <div class="icon p-1 d-flex align-items-center justify-content-center">
                                                <span class="fa fa-paper-plane"></span>
                                            </div>
                                            <div class="text">
                                                {this.state.contact.map(contact =><p key=''>{contact.email}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="dbox w-100 text-center mb-2">
                                            <div class="icon p-1 d-flex align-items-center justify-content-center">
                                                <span class="fa fa-globe"></span>
                                            </div>
                                            <div class="text">
                                                {this.state.contact.map(contact =><p key=''>{contact.company_name}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p><img src={undraw_contact} alt="contact_img" className="img-fluid" height="300px" /></p>
                            </div>
                            <div className="col-md-6 form">
                                <form className="mb-5" method="post" id="contactForm" name="contactForm">
                                    <div className="row">
                                    <div className="col-md-12 form-group p-2">
                                        <input type="text" className="form-control " name="name" id="name" placeholder="Your name" />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 form-group p-2">
                                        <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 form-group p-2">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 form-group p-2">
                                        <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                                    </div>
                                    </div>  
                                    <div className="row">
                                    <div className="col-12 p-2">
                                        <button type="submit" className="btn btn-sm btn-primary" aria-label="submit">Send Message</button>
                                    <span className="submitting"></span>
                                    </div>
                                    </div>
                                </form>
                                </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}