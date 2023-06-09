import React,{ useRef } from 'react';
// Import Swiper React components
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import slider1 from '../media/slider-1.jpg';
import slider2 from '../media/slider-2.jpg';
import slider3 from '../media/slider-3.jpg';
import pic3 from '../media/tech/3.png';
import pic8 from '../media/tech/8.jpg';
import pic9 from '../media/tech/9.jpg';
import pic10 from '../media/tech/10.png';
import pic11 from '../media/tech/11.jpg';
import pic12 from '../media/tech/12.png';

SwiperCore.use([EffectCoverflow, Pagination]);

function Main() {
    const swiperRef = useRef();
    //console.log(swiperRef,"=========")
    return(
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={
                    { clickable: true }
                }
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                className="mySwiper"
            >
                <SwiperSlide className='swiper-wrapper'>
                    <div className="swiper-slide">
                        <img className="bd-placeholder-img" src={slider1} aria-hidden="true" alt='' />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 className="text-small">Ordering, supply and installation processes</h1>
                                <p className="text-small"> Easier and more convenient.</p>
                                <p><a className="btn btn-sm btn-primary" href="/">Browse gallery <i className="fa-solid fa-angles-right"></i></a></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-wrapper'>
                    <div className="swiper-slide">
                        <img className="bd-placeholder-img" src={slider2} aria-hidden="true" alt='' />
                        <div className="container">
                            <div className="carousel-caption text-start">
                            <h1 className="text-small">Ordering, supply and installation processes</h1>
                            <p className="text-small"> Easier and more convenient.</p>
                            <p><a className="btn btn-primary " href="/">Browse gallery <i className="fa-solid fa-angles-right"></i></a></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-wrapper'>
                    <div className="swiper-slide">
                        <img className="bd-placeholder-img" src={slider3} aria-hidden="true" alt='' />
                        <div className="container">
                            <div className="carousel-caption text-start">
                            <h1 className="text-small">Ordering, supply and installation processes</h1>
                            <p className="text-small"> Easier and more convenient.</p>
                            <p><a className="btn btn-primary " href="/">Browse gallery <i className="fa-solid fa-angles-right"></i></a></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <div className="swiper-button-next" onClick={() => swiperRef.current.slideNext()}></div>
                <div className="swiper-button-prev" onClick={() => swiperRef.current.slidePrev()}></div>
                
            </Swiper>
            <div className="container marketing ">

                <hr className="featurette-divider " />

                <div className="row featurette ">
                    <div className="col-md-8">
                        <h2 className="f-heading">About Cipac<span className="text-muted text-small "> Engineering.</span></h2>
                        <p className="lead">
                        At CIPAC Engineering, we are driven by a relentless passion for engineering excellence. As a leading engineering firm, 
                        we specialize in providing innovative solutions for a wide range of industries, delivering exceptional results that exceed our clients' expectations. 
                        We take pride in our ability to deliver ...</p>
                        <p><a className="btn btn-primary" href="/About">Read More  <i className="fa-solid fa-angles-right"></i></a></p>
                    </div>
                    <div className="col-md-4 img float-right">
                        <a href='/About'><img className="bd-placeholder-img-lg featurette-image img-fluid ms-auto" width="500px" height="500px" loading="lazy" src={pic3} alt=""  aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false" /></a>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="row persons p-1 pt-4">
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" loading="lazy" src={pic9} alt=""  aria-label="Placeholder: 500x500" />

                        <h2 className="fw-normal">Store</h2>
                        <p>We offer a wide range of products and supplies necessary for engineering projects, research, and development</p>
                        <p><a className="btn btn-primary" href="/">Explore</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" loading="lazy" src={{pic12}} alt=""  aria-label="Placeholder: 500x500" />
                        <h2 className="fw-normal">About</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a className="btn btn-primary" href="/">View</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" loading="lazy" src={pic11} alt=""  aria-label="Placeholder: 500x500" />
                        <h2 className="fw-normal">Services</h2>
                        <p>Our services encompass a broad range of activities that involve installation, sales and supply and consultancy.</p>
                        <p><a className="btn btn-primary" href="/">View services</a></p>
                    </div>
                </div>

                <hr className="featurette-divider"/>
                <div className="row featurette third p-1 pt-3">
                <div className="col-md-7 order-md-2">
                    <h2 className="f-heading">Oh yeah, it’s that good.
                        <p>
                            <a href="/" className="highlight text-muted text-small">See for yourself.</a>
                        </p>
                    </h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 img">
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" loading="lazy" src={pic10} alt=""  aria-label="Placeholder: 500x500" focusable="false" />
                </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette p-1 pt-4">
                    <div className="col-md-7">
                        <h2 className="featurette-heading ">And lastly, this one. <span className="highlight text-muted text-small">Checkmate.</span></h2>
                        <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" loading="lazy" src={pic8} alt="" aria-label="Placeholder: 500x500" focusable="false" />
                    </div>
                </div>

                <hr className="featurette-divider" />

            </div>
            
        </div>
    )
}

export default Main;