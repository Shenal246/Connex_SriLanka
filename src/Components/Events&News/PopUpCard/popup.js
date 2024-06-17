import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './popup.css';
import card1 from '../../images/news.png';
import vid1 from './Video/videoplayback.mp4';

const Popup = () => {
    const videoRef = useRef(null); // Create a ref for the video element

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className="row gy-3 text">
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='popupText'>Popup & News</p></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                </div>
            </div>

            {/* first row  */}
            <div className="row cards">
                {/* first card */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card mb-3 card1 text-light position-relative crd rounded-5" data-bs-toggle="modal" data-bs-target="#videoModal">
                        <div className="position-relative">
                            <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" />
                            <div className="centered">
                                <Link to="" className="fa-solid fa-play playicon"></Link>
                            </div>
                        </div>
                        <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                            <div className="row">
                                <h5 className="card-title small-title">Card title. In publishing and graphic design, Lorem ipsum may be used as a placeholder before the final content.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true" onClick={handleCloseModal}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content modalClr">
                        <div className="modal-header">
                            <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <video controls ref={videoRef} className="w-100">
                                <source src={vid1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
