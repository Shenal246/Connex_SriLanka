import React from 'react';
import headlogo from '../../images/about-page-img2.png'
import arrowleft from '../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../images/map/SL-070722-51460-10 [Converted].png';
import '../Home/Vendors/Vendors.css';

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
            name: 'Nirosh Madushan Nirosh Madushan',
            img: '/quots/Rajiv.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Founder',
        },
        {
            name: 'Nirosh Madushan',
            img: '/quots/Rajiv.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Founder',
        },
        {
            name: 'Nirosh Madushan',
            img: '/quots/Rajiv.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Founder',
        },
        {
            name: 'test',
            img: '/quots/Rajiv.jpg',
            quote: '“Sample text quote place hear”',
            post: 'Founder',
        }
    ];
    var settings = {
        dots: true,
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
                            <div class="col-sm" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" >
                                <img src={headlogo} className='headimg'></img>
                            </div>
                            <div class="col-sm" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                                <div className='story'>
                                    <h1>Our Story</h1>
                                    <p>Over a decade in the industry, we've empowered over 100 partners with products from 60+ vendors, serving countless successful customers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm " data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                                <div className='story bdround'>
                                    <h1>Our Vision</h1>
                                    <p>Our vision is to be the most innovative distributor of it products in the country by developing and working closely with our valued channels through effective marketing and proficient support, thus enabling our partners and the company to grow together.</p>
                                </div>
                            </div>
                            <div class="col-sm" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
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




                <div className='slider' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
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
                <div className='spc'></div>
        <div className="row gy-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
            
                <div className="col-4"><hr /></div>
                 <div className="col-4"><p id='ourVendorsText'>Countries</p></div>
                <div className="col-4"><hr /></div>
            
         
        </div >
            <div className='row imageMap'data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                <div className="row gy-3 text">
                    <div className="col-3" ></div>
                    <div className="col-6" > <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo"  /></div>
                    <div className="col-3" ></div>
                </div>
            </div>

        </>);


}

export default About;