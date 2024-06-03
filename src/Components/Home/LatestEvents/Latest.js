import './Latest.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from 'react-icons/bs';
import axios from "axios";
import { NavLink } from "react-router-dom";

import Latest1 from '../../../images/Latest/1.png';
import { useState, useEffect } from 'react';
import connections from '../../../config';

const Latest = () => {
    const [latestOne, setLatestOne] = useState(null);
    const [latestTwo, setLatestTwo] = useState(null);
    const [latestThree, setLatestThree] = useState(null);
    const [latestFour, setLatestFour] = useState(null);

    const serverlink = connections.serverLink;

    useEffect(() => {
        // Latest One
        const values = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE status=1 AND cnt=1 AND type=3;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, values).then((response) => {
            setLatestOne(response.data);
        }).catch((err) => {
            console.log(err);
        });

        // Latest Two
        const value2 = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE status=1 AND cnt=1 AND type=4;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, value2).then((response) => {
            setLatestTwo(response.data);
        }).catch((err) => {
            console.log(err);
        });

        // Latest Three
        const value3 = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE status=1 AND cnt=1 AND type=5;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, value3).then((response) => {
            setLatestThree(response.data);
        }).catch((err) => {
            console.log(err);
        });

        // Latest One
        const value4 = {
            query: "SELECT title,link,type,status,image_data,cnt FROM news WHERE status=1 AND cnt=1 AND type=6;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, value4).then((response) => {
            setLatestFour(response.data);
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    return (
        <section >
            <div className='container latest'>
                <div className="row gy-3 headingRow" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-4"><hr /></div>
                    <div className="col-4"><p id='whoweareText'>Latest News</p></div>
                    <div className="col-4"><hr /></div>
                </div>

                <div className="row backgrnd" >
                    <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        {/* first image of the first column */}
                        <div className="mb-2">
                            <Card className='cardContainer1'>
                                <Card.Img variant="top" src={latestOne && latestOne.image_data} className='image1' />
                                <Card.Body className='cardBody'>
                                    <Card.Title>{latestOne && latestTwo.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    {/* First image of the Second column */}
                    <div className="col-md-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        <div className='row'>
                            <div className="mb-2">
                                <Card className='cardContainer2'>
                                    <Card.Img variant="top" src={Latest1} className='image2' />
                                    <Card.Body className='cardBody2'>
                                        <Card.Title>Card Title 2</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                        <div className="mb-2">
                            <div className='row'>
                                <div className="col-md-6">
                                    {/* First image of the Second column second row */}
                                    <div className="mb-2">
                                        <Card className='cardContainer2'>
                                            <Card.Img variant="top" src={Latest1} className='image2' />
                                            <Card.Body className='cardBody2'>
                                                <Card.Title>Card Title 3</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* Second image of the Second column second row */}
                                    <div className="mb-2">
                                        <Card className='cardContainer2'>
                                            <Card.Img variant="top" src={Latest1} className='image2' />
                                            <Card.Body className='cardBody2'>
                                                <Card.Title>Card Title 4</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* See more button */}
                    <div className="col-md-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                        <div className="navigation">
                            <NavLink to="/Events&News"><Button variant="" className='iconsss' style={{ backgroundColor: '#01066B' }}>
                                <BsArrowRight size={30} />
                            </Button></NavLink>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Latest;
