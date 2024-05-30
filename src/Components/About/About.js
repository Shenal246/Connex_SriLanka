import React from 'react';
import headlogo from '../../images/about-page-img2.png'
import arrowleft from '../../images/icons8-triangle-64.png'
import './About.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import 'animate.css';
import card1 from '../../images/map/map trans.png';

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
            quote: '"Leadership is not just about making decisions; it\s about inspiring others to achieve greatness."',
            post: 'Founder / CEO',
        },
        {
            name: 'Shamal Aberathne',
            img: '/quots/Shamal.jpg',
            quote: '"In a world of noise, our brand\'s voice must be authentic, engaging, and memorable."',
            post: 'CMO',
        },
        {
            name: 'Dilshan De Silva',
            img: '/quots/Dilshan_Silva.jpg',
            quote: '"Operational excellence is the foundation of our success, driving efficiency and innovation."',
            post: 'COO',
        },
        {
            name: 'Rohan Samaraweera',
            img: '/quots/Rohan.jpg',
            quote: '"Technology transforms vision into reality, powering our journey into the future."',
            post: 'CTO',
        },
        {
            name: 'Rajiv Senawirathne',
            img: '/quots/Rajiv.jpg',
            quote: '"Customer trust and satisfaction are the cornerstones of our company\'s reputation."',
            post: 'Director of Connex HQ',
        },
        {
            name: 'Patric Yogarathnam',
            img: '/quots/Patrick_yogarathnam.jpg',
            quote: '"Connecting with our global customers requires understanding diverse needs and delivering exceptional service."',
            post: 'CIR',
        },
        {
            name: 'Eranga Wickramasinghe',
            img: '/quots/Eranga.jpg',
            quote: '"Building strong relationships with our customers is the cornerstone of our success and growth."',
            post: 'CRO',
        },
        {
            name: 'Janani Siriwardhane',
            img: '/quots/Janani_Siriardhane.jpg',
            quote: '"Empowering employees and fostering a positive culture are the keys to organizational success."',
            post: 'Director of Connex HQ',
        },
        {
            name: 'Romesh De Silva',
            img: '/quots/romesh.jpg',
            quote: '"Success in sales is not about pushing products, but about understanding and solving customer needs."',
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
                <div class="container classss">
                    <div className='center' data-aos="fade-up" data-aos-delay="200">
                        <div className='row'>
                            <div className='col-md-6'>
                            <img src={headlogo} className='headimg'></img>
                            </div>

                            <div className='col-md-6 para'>
                            <div className='story'>
                                    <h1 className='topic'>Our Story</h1>
                                    <p><br/>"Founded with a passion for technology and excellence,<br/><span className='storyCNX'> CONNEX INFORMATION TECHNOLOGY</span>  has become a leader in IT product distribution. We started with a vision to revolutionize the industry through innovative solutions and unparalleled support. Our success is built on strong relationships with our clients and partners, enabling us to adapt and meet dynamic market needs. As we grow, we remain committed to innovation, integrity, and partnership, driving mutual growth and setting new benchmarks in the industry."</p>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6 content'>
                            <div className='story bdround bdround1'>
                                    <h1 className='topic'>Our Vision</h1>
                                    <p><br/>"Our mission is to deliver high-quality IT products and solutions through our extensive network of partners. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers, driving sustained growth and technological advancement."</p>
                                </div>
                            </div>

                            <div className='col-md-6'>
                            <div className='story bdround bdround2'>
                                    <h1 className='topic'>Our Mission</h1>
                                    <p><br/>"Our mission is to deliver high-quality IT products and solutions by leveraging our extensive network of partners and channels. We are committed to providing exceptional service, innovative marketing, and dedicated support to ensure the success of our partners and the satisfaction of our customers. Together, we strive to build a technologically advanced future and achieve sustained growth."
</p>
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

                            <div className='sl bdound'>
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

<div className='row imageMap'>
                <div className="row gy-3 text">
                    <div className="col-2" ></div>
                    <div className="col-8" > <img src={card1} className="map rounded-5 opacity-75 " alt="ConnexIT Logo"  /></div>
                    <div className="col-2" ></div>
                </div>
            </div>

        </>);


}

export default About;