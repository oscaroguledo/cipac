import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
    state = {
        about: [],
        message:""
      }
    
      componentDidMount() {
        let data;
        axios.get(`http://127.0.0.1:8000/account/profile/:profile_id`)
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
            <div className='profile mt-4'>
                <section id="profile" className="profile">
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
                        </div>

                    </div>
                </section>

            </div>
        )
    }           
}