import { React, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import "./styles/Home.css";
import bg1 from './images/bg1.png';
import bg2 from './images/bg2.png';
import bg3 from './images/bg3.png';

const Home = () => {
    useEffect(() => {
        document.title = 'Homepage';
    }, []);
    
    return (
        <div className='main_header'>
            {/* adding script */}
            <Helmet>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
            </Helmet>

            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row">
                        <div className="col-md-6 col-12 main_header_left">
                            <p>Welcome to WeatherCheck</p>
                            <h1>Get the current <span className="txt_clr">weather</span> information of your city</h1>
                        </div>

                        <div className="col-md-6 col-12 main_header_right home_header_right">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="w-100" src={ bg1 } alt="First Slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="w-100" src={ bg2 } alt="Second Slide"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="w-100" src={ bg3 } alt="Third Slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                    data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                    data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
