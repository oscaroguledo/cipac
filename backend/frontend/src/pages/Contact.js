import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {
    state = {
        about: [],
        message:""
      }
    
      componentDidMount() {
        let data;
        axios.get(`http://127.0.0.1:8000/contact`)
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
        return (
            <div className='contact mt-4'>
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title mt-4">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="row content">
                            <div className="col-lg-6">
                            {
                            this.state.about.map(about =>
                                <p className='d-flex justify-content-between' key=''>
                                    {about.email}   
                                </p>)
                            }
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0">
                                <h5> Brief history of the company</h5>
                                {
                                this.state.about.map(about =>
                                    <p className='d-flex justify-content-between' key=''>
                                        {about.address}
                                    </p>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}