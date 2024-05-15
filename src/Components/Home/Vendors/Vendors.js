import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS

import './Vendors.css';

// Import your image files
import ven1 from '../../../images/vendorLogos/1.png';
import ven2 from '../../../images/vendorLogos/2.png';
import ven3 from '../../../images/vendorLogos/3.png';
import ven4 from '../../../images/vendorLogos/4.png';
import ven5 from '../../../images/vendorLogos/5.png';
import ven6 from '../../../images/vendorLogos/6.png';
import ven7 from '../../../images/vendorLogos/7.png';
import ven8 from '../../../images/vendorLogos/8.png';
import ven9 from '../../../images/vendorLogos/9.png';
import ven10 from '../../../images/vendorLogos/10.png';
import ven11 from '../../../images/vendorLogos/11.png';
import ven12 from '../../../images/vendorLogos/12.png';
import ven13 from '../../../images/vendorLogos/13.webp';
import ven14 from '../../../images/vendorLogos/14.png';
import ven15 from '../../../images/vendorLogos/15.png';
import ven16 from '../../../images/vendorLogos/16.png';
import ven17 from '../../../images/vendorLogos/17.png';
import ven18 from '../../../images/vendorLogos/18.png';
import ven19 from '../../../images/vendorLogos/19.png';
import ven20 from '../../../images/vendorLogos/20.png';
import ven21 from '../../../images/vendorLogos/21.png';
import ven22 from '../../../images/vendorLogos/22.png';
import ven23 from '../../../images/vendorLogos/23.png';
import ven24 from '../../../images/vendorLogos/24.png';
import ven25 from '../../../images/vendorLogos/25.png';
import ven26 from '../../../images/vendorLogos/26.png';
import ven27 from '../../../images/vendorLogos/27.png';
import ven28 from '../../../images/vendorLogos/28.png';
import ven29 from '../../../images/vendorLogos/29.png';
import ven30 from '../../../images/vendorLogos/30.png';
import ven31 from '../../../images/vendorLogos/31.png';
import ven32 from '../../../images/vendorLogos/32.png';
import ven33 from '../../../images/vendorLogos/33.png';
import ven34 from '../../../images/vendorLogos/34.png';
import ven35 from '../../../images/vendorLogos/35.png';
import ven36 from '../../../images/vendorLogos/36.png';
import ven37 from '../../../images/vendorLogos/37.png';
import ven38 from '../../../images/vendorLogos/38.png';
import ven39 from '../../../images/vendorLogos/39.png';
import ven40 from '../../../images/vendorLogos/40.png';
import ven41 from '../../../images/vendorLogos/41.png';
import ven42 from '../../../images/vendorLogos/42.png';
import ven43 from '../../../images/vendorLogos/43.png';
import ven44 from '../../../images/vendorLogos/44.png';
import ven45 from '../../../images/vendorLogos/45.png';
import ven46 from '../../../images/vendorLogos/46.png';
import ven47 from '../../../images/vendorLogos/47.png';
import ven48 from '../../../images/vendorLogos/48.png';
import ven49 from '../../../images/vendorLogos/49.png';
import ven50 from '../../../images/vendorLogos/50.png';
import ven51 from '../../../images/vendorLogos/51.png';
import ven52 from '../../../images/vendorLogos/52.png';
import ven53 from '../../../images/vendorLogos/53.png';
import ven54 from '../../../images/vendorLogos/54.png';
import ven55 from '../../../images/vendorLogos/55.png';
import ven56 from '../../../images/vendorLogos/56.png';
import ven57 from '../../../images/vendorLogos/57.png';
// Add import statements for all your images here...

const imagePaths = [ven1, ven2, ven3, ven4, ven5, ven6, ven7, ven8, ven9, ven10,
  ven11, ven12, ven13, ven14, ven15, ven16, ven17, ven18, ven19, ven20,
  ven21, ven22, ven23, ven24, ven25, ven26, ven27, ven28, ven29, ven30,
  ven31, ven32, ven33, ven34, ven35, ven36, ven37, ven38, ven39, ven40,
  ven41, ven42, ven43, ven44, ven45, ven46, ven47, ven48, ven49, ven50,
  ven51, ven52, ven53, ven54, ven55, ven56, ven57
]; // Add all your image paths to this array

const Vendors = () => {
  return (
    <section className='vendors'>
      <div className='container'>
        {/* Vendors Text */}
        <div className="row gy-3" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
          <div className="col-4"><hr /></div>
          <div className="col-4"><p id='ourVendorsText'>Our Vendors</p></div>
          <div className="col-4"><hr /></div>
        </div>

        <div className='row vendorText' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
          <p>Embark on technological Excellence with our Trusted <br />Network of Vendors.</p>
        </div>

        <div className='row' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">
          <div className='col-lg-1'></div>
          <div className='col-lg-10'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 550,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {imagePaths.map((path, index) => (
                <SwiperSlide key={index}>
                  <div className='image-container'>
                    <img src={path} alt={`ven${index}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='col-lg-1'></div>
        </div>
      </div>
    </section>
  );
};

export default Vendors;
