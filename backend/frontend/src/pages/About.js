import React from 'react';
import team1 from '../media/people/team-1.jpg';
import team2 from '../media/people/team-2.jpg';
import team3 from '../media/people/team-3.jpg';
import team4 from '../media/people/team-4.jpg';
import axios from 'axios';

export default class About extends React.Component {
    state = {
        about: [],
        message:""
      }
    
      componentDidMount() {
        let data;
        axios.get(`http://127.0.0.1:8000/about`)
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
            <div className='about mt-4'>
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title mt-4">
                            {this.state.about.map(about =><h2 key=''>About {about.company_name}</h2>)}
                        </div>

                        <div className="row content">
                            <div className="col-lg-6">
                            {
                            this.state.about.map(about =>
                                <p className='d-flex justify-content-between' key=''>
                                    {about.about}   
                                </p>)
                            }
                            </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <h5> Brief history of the company</h5>
                            {
                            this.state.about.map(about =>
                                <p className='d-flex justify-content-between' key=''>
                                    {about.history}
                                </p>)
                            }
                        </div>
                        </div>

                    </div>
                </section>
                <section id="why-us" className="why-us section-bg">
                    <div className="container-fluid" data-aos="fade-up">

                        <div className="row top-line">

                            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                                <div className="content">
                                    <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    </p>
                                </div>

                                <div className="accordion content">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Motto/Slogan
                                        </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            {this.state.about.map(about =>
                                                <span><strong key=''>Motto</strong> {about.motto}</span>
                                            )}
                                            <br/>
                                            {this.state.about.map(about =>
                                                <span><strong key=''>Slogan</strong> {about.slogan}</span>
                                            )}
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Subsidiaries
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Frequently asked questions
                                        </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img why-us-div" data-aos="zoom-in" data-aos-delay="150" loading="lazy">&nbsp;
                            </div>
                        </div>
                    </div>
                </section>
                
                <section id="team" className="team section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. 
                            Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                            <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img src={team1} className="img-fluid" loading="lazy" alt=""/>
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Nwokoye Henry</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social">
                                <a href="/"><i className="bi bi-twitter"></i></a>
                                <a href="/"><i className="bi bi-facebook"></i></a>
                                <a href="/"><i className="bi bi-instagram"></i></a>
                                <a href="/"> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img src={team2} className="img-fluid" loading="lazy" alt="" /></div>
                            <div className="member-info">
                                <h4>Oguledo Oscar</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div className="social">
                                <a href="/"><i className="bi bi-twitter"></i></a>
                                <a href="/"><i className="bi bi-facebook"></i></a>
                                <a href="/"><i className="bi bi-instagram"></i></a>
                                <a href="/"> <i className="bi bi-linkedin-box"></i> </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                            <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img src={team3} className="img-fluid" loading="lazy" alt="" /></div>
                            <div className="member-info">
                                <h4>Okeke Kosisochukwu</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div className="social">
                                <a href="/"><i className="bi bi-twitter"></i></a>
                                <a href="/"><i className="bi bi-facebook"></i></a>
                                <a href="/"><i className="bi bi-instagram"></i></a>
                                <a href="/"> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="400">
                            <div className="member d-flex align-items-start">
                            <div className="pic">
                                <img src={team4} className="img-fluid" loading="lazy" alt="" /></div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div className="social">
                                <a href="/"><i className="bi bi-twitter"></i></a>
                                <a href="/"><i className="bi bi-facebook"></i></a>
                                <a href="/"><i className="bi bi-instagram"></i></a>
                                <a href="/"> <i className="bi bi-linkedin"></i> </a>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>

                    </div>
                </section>

            </div>
        )
    }           
}