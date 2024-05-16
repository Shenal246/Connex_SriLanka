import './Latest.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from 'react-icons/bs'; // Importing Bootstrap icon

import Latest1 from '../../../images/Latest/1.png';

const Latest = () => {

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
                                <Card.Img variant="top" src={Latest1} className='image1' />
                                <Card.Body className='cardBody'>
                                    <Card.Title>Card Title 1</Card.Title>
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
                            <Button variant="" className='iconsss' style={{ backgroundColor: '#01066B' }}>
                                <BsArrowRight size={30} />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Latest;
