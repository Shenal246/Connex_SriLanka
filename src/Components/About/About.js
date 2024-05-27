import React from 'react';
import headlogo from '../../images/about-page-img2.png'
import arrowleft from '../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../images/map/SL-070722-51460-10 [Converted].png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        >

        </div>
    );
}

const About = () => {
    const data = [
        {
            name: 'Suresh Wijesinghe',
            img: '/quots/Suresh.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Founder / CEO',
        },
        {
            name: 'Shamal Aberathne',
            img: '/quots/Shamal.jpg',
            quote: '“Sample text quote place hear”',
            post: 'CMO',
        },
        {
            name: 'Dilshan De Silva',
            img: '/quots/Dilshan_Silva.jpg',
            quote: '“Sample text quote place hear”',
            post: 'COO',
        },
        {
            name: 'Rohan Samaraweera',
            img: '/quots/Rohan.jpg',
            quote: '“Sample text quote place hear”',
            post: 'CTO',
        },
        {
            name: 'Rajiv Senawirathne',
            img: '/quots/Rajiv.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Director of Connex HQ',
        },
        {
            name: 'Patric Yogarathnam',
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: '“Sample text quote place hear”',
            post: 'CIR',
        },
        {
            name: 'Eranga Wickramasinghe',
            img: '/quots/Eranga.jpg',
            quote: '“Sample text quote place hear”',
            post: 'CRO',
        },
        {
            name: 'Janani Siriwardhane',
            img: '/quots/Janani_Siriardhane.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Director of Connex HQ',
        },
        {
            name: 'Romesh De Silva',
            img: '/quots/romesh.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Director of Connex HQ',
        }

    ];
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <section id='t1'>
                <div class="container">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div class="row">
                            <div class="col-sm" >
                                <img src={headlogo} className='headimg'></img>
                            </div>
                            <div class="col-sm">
                                <div className='story'>
                                    <h1>Our Story</h1>
                                    <p>Over a decade in the industry, we've empowered over 100 partners with products from 60+ vendors, serving countless successful customers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm ">
                                <div className='story bdround'>
                                    <h1>Our Vision</h1>
                                    <p>Our vision is to be the most innovative distributor of it products in the country by developing and working closely with our valued channels through effective marketing and proficient support, thus enabling our partners and the company to grow together.</p>
                                </div>
                            </div>
                            <div class="col-sm">
                                <div className='story bdround'>
                                    <h1>Our Mission</h1>
                                    <p>Our vision is to be the most innovative distributor of it products in the country by developing and working closely with our valued channels through effective marketing and proficient support, thus enabling our partners and the company to grow together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='t2'>




                <div className='slider'>
                    <Slider {...settings}>

                        {data.map((d) => (<>

                            <div className='sl bdround'>
                                <div class="row">
                                    <div class="col-sm ">
                                        <img src={d.img}></img>
                                    </div>
                                    <div class="col-sm ">
                                        <h3>{d.quote}</h3>
                                        <div>
                                            <h4>{d.name}</h4>
                                            <p>{d.post}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>

                        ))}

                    </Slider>


                </div>





            </section>

            {/* <div className='row imageMap'>
                    <div className='col-4'>

                    </div>
                    <div className='col-4'>
                    <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo"  />
                    </div>
                    <div className='col-'>
                        
                    </div>
                    

                </div> */}
            <div className="row" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                <div className="col-4"><hr /></div>
                <div className="col-4"><p id='countriesText'>Countries</p></div>
                <div className="col-4"><hr /></div>
            </div>

            <div className='row imageMap'>
                <div className="row text">
                    <div className="col-3" ></div>
                    <div className="col-6" > <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo" /></div>
                    <div className="col-3" ></div>
                </div>
            </div>

        </>);


}

export default About;