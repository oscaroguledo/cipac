import React from 'react';
function Services() {
    return (
        <div className='service mt-4'>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title mt-4">
                    <h2>Services</h2>
                    <p>The services we offer include the following.</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch " data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-house-gear"></i></div>
                                <h4><a href="/">Interior Design</a></h4>
                                <p>Transform your space into a stunning sanctuary with our exquisite interior design services.</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                            <div className="icon"><i className="bi bi-files"></i></div>
                            <h4><a href="/">Find Engineers</a></h4>
                            <p>We connect you to top-notch engineers who will bring your vision to life with expertiseand passion.</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div class="icon-box">
                            <div className="icon"><i className="bi bi-speedometer"></i></div>
                            <h4><a href="/">Supply</a></h4>
                            <p>Unlock the power of convenience with our unrivaled supply services, tailored to meet all your needs</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                            <div className="icon"><i className="bi bi-layers"></i></div>
                            <h4><a href="/">Engineering</a></h4>
                            <p>Engineer your projects with our cutting edge products and solutions, where innovation meets precison.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services