import './Hero.css';
import Logo from '../../../images/hero.png';
import React, { useEffect } from 'react';


function HeroSection() {

  

  return (
    <section id="hero" className="section hero">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-8 order-2 order-lg-1 d-flex flex-column justify-content-center cont" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
            <h3 className='settop'>Leading Technology Distributor</h3>
            <h1>Welcome to <span className='Connexcon'>Con</span><span className='Connexnex'>nex</span> Information Technologies</h1>
            <p>Value added distributor for more than 30 leading global vendors.</p>

            <div class="row gy-4">
              <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">

                <div class="d-flex">
                  <a href="index.html#about" class="btn-get-started">Contact Us</a>
                  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                </div>
              </div>

            </div>

          </div>
          <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
            <img src={Logo} className="img-fluid animated heroimg" style={{ width: '100%' }} alt="" />
          </div>
          <div className="col-lg-6 order-1 order-lg-2 space"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
