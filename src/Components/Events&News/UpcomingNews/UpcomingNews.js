import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNews.css';
import card1 from '../../../images/news.png';
import axios from "axios";
import vid1 from '../Video/videoplayback.mp4';

const UpcomingNews = () => {
    const videoRef = useRef(null); // Create a ref for the video element
    const [newsData, setNewsData] = useState([]);
    const [currentVideoLink, setCurrentVideoLink] = useState(null);

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video
        }
        setCurrentVideoLink(null);
    };

    const handleCardClick = (nlink) => {
        setCurrentVideoLink(nlink);
    };

    useEffect(() => {
        const values = {
            query: "SELECT title,nlink,newstype_id,status_id FROM news WHERE newstype_id=5 AND status_id=1;",
            key: "Cr6re8VRBm"
        };

        axios.post("http://192.168.13.75:5000/search", values).then((response) => {
            setNewsData(response.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <div className="container">
            <div className='row'>
                <div className="row text">
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='UpcomingNewsText'>Upcoming <br /> Events & News</p></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                </div>
            </div>

            <div className="row cards">
                {newsData.map((news, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="card mb-3 card1 text-light position-relative crd rounded-5" data-bs-toggle="modal" data-bs-target="#videoModal" onClick={() => handleCardClick(news.nlink)}>
                            <div className="position-relative">
                                <img src={card1} className="card-img-top image rounded-top-5 opacity-75" alt="ConnexIT Logo" style={{ width: '100%', height: 'auto' }} />
                                <div className="centered">
                                    <Link to="#" className="fa-solid fa-play playicon"></Link>
                                </div>
                            </div>
                            <div className="card-body card1 rounded-top-1 rounded-bottom-5">
                                <div className="row">
                                    <h5 className="card-title small-title">{news.title}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="videoModalLabel" aria-hidden="true" onClick={handleCloseModal}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content modalClr">
                        <div className="modal-header">
                            <button type="button" className="btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {currentVideoLink && (
                                <iframe
                                    width="1100"
                                    height="500"
                                    src={currentVideoLink}
                                    title="Video Player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UpcomingNews;
