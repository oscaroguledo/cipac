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
                        <a href="/" className="col-xl-3 col-md-6 d-flex align-items-stretch text-decoration-none" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon btn btn-sm ">
                                    <h4 className='mt-2 mb-2'>Interior Design</h4>
                                </div>
                                <p className='text-dark d-flex justify-content-between'>Transform your space into a stunning sanctuary with our exquisite interior design services. 
                                </p>
                            </div>
                        </a>
                        <a href="/" className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 text-decoration-none" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon btn btn-sm ">
                                    <h4 className='mt-2 mb-2'>Find Engineers</h4>
                                </div>
                                <p className='text-dark d-flex justify-content-between'>We connect you to top-notch engineers who will bring your vision to life with expertiseand passion. 
                                </p>
                            </div>
                        </a>
                        <a href="/" className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 text-decoration-none" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="icon btn btn-sm ">
                                    <h4 className='mt-2 mb-2'>Supply</h4>
                                </div>
                                <p className='text-dark d-flex justify-content-between'>Unlock the power of convenience with our unrivaled supply services, tailored to meet all your needs. 
                                </p>
                            </div>
                        </a>
                        <a href="/" className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 text-decoration-none" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="icon btn btn-sm ">
                                    <h4 className='mt-2 mb-2'>Engineering</h4>
                                </div>
                                <p className='text-dark d-flex justify-content-between'>Engineer your projects with our cutting edge products and solutions, where innovation meets precison. 
                                </p>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services