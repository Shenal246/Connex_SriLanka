// import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <h3>Head Office</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img" ></i>
                                Level 35,<br/>
                                <span>The Gateway West 150 Beach Road,</span><br/>  
                                <span> Singapore 189720 .</span> <br/>
                                <i className="fas fa-phone-volume callIcon1" ></i>Contact: +45 00000000
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-1 address2">
                        <h3>Sri Lankan Office</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img2" ></i>
                                 No 286,<br/>
                                <span>R. A. De Mel Mawatha,</span><br/>  
                                <span> Colombo 00300,</span> <br />
                                <span>Sri Lanka .</span><br />
                                <i className="fas fa-phone-volume callIcon2" ></i>Contact: +11 22334455
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 resources">
                            <h3>Resources</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Events & News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">FAQs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Careers</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="row rowlast">
                        <div className="col-md-6 col-lg-4  ft-1">
                            <div className="footer-icons img icons">
                                <a className="" href="https://www.facebook.com/connexinformationtechnologies" target="_blank"><i className="fab fa-facebook facebook"></i></a>
                                <a className="" href="/"><i className="fa-brands fa-x-twitter twitter" target="_blank"></i></a>  
                                <a className="" href="https://www.instagram.com/connexinformationtechnologies?igsh=MjYxNnpkN3FqNTd0" target="_blank"><i className="fab fa-instagram instagram"></i></a>
                                <a className="" href="https://www.linkedin.com/company/connexinformationtechnologies/mycompany/" target="_blank"><i className="fab fa-linkedin-in linkedIn"></i></a>
                                <a className="" href="https://www.youtube.com/@connexinformationtechnologies" target="_blank"><i class="fa-brands fa-square-youtube youtube"></i></a>
                            </div>
                        </div>
                        <div className=" col-md-4  ft-1 address2">
                        </div>
                        <div className="col-md-6 col-lg-4  ft-2 ownerRights">
                            <h6>Developed by ConnexIT</h6>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Footer;
