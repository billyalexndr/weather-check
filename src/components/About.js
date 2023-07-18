import { React, useEffect } from 'react';
import "./styles/About.css";
import profile from './images/profile.jpg';

const About = () => {
    useEffect(() => {
        document.title = 'About';
    }, []);
    
    return (
        <div className="main_header">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row">
                        <div className="col-md-6 col-12 main_header_right">
                            <figure>
                                <img src={ profile } alt="Billy" title="Billy Alexander" className='img-flud'/>
                            </figure>
                        </div>
                        <div className="col-md-6 col-12 main_header_left">
                            <p>Welcome to WeatherCheck</p>
                            <h1>I'm <span class="txt_clr">Billy Alexander</span>, A Student at <span class="txt_clr">UPNVJ </span></h1>
                            <a href="" target="blank"><button>My Portfolio</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
