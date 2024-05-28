import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const formRef = useRef();
    const [isHuman, setIsHuman] = useState(false);
    const recaptchaRef = useRef();

    const onSubmit = async (data) => {
        if (!isHuman) {
            alert('Please verify that you are a human!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/send-email', data);
            console.log(response.data);
            reset();
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleRecaptchaChange = (value) => {
        setIsHuman(!!value);
    };

    return (
        <div className="container">
            <div className='row'>
                <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-md-4"><hr /></div>
                    <div className="col-md-4"><p id='Text'>Contact Us</p></div>
                    <div className="col-md-4"><hr /></div>
                </div>
            </div>
            <div className="row ">
                <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <h1 className='h1'>Reach out to us <br /> to let us know how<br /> we can assist you.</h1>
                    <h2 className='h2'>We are happy to provide  <br /> customer support or <br />answer   any general inquiries  <br /> you may have.</h2>
                </div>
                <div className="col-md inputField" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating col-md-mb-3">
                            <div className="row mt-4 mb-4">
                                <div className="col-md mb-3">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" {...register('firstName', { required: true })} />
                                 
                                </div>
                                <div className="col-md">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" {...register('lastName', { required: true })} />
                   
                                </div>
                            </div>
                        </div>

                        <div className="col-md mb-4">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email', { required: true })} />
         
                        </div>

                        <div className="col-md">
                            <textarea className="form-control txtarea" placeholder="Leave a comment here" id="floatingTextarea2" {...register('comments', { required: true })}></textarea>
             
                        </div>

                        <div className="row mt-4 btnContainer">
                            <div className="col-md-6 mb-3">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                            <div className="col-md-6">
                                <button type="reset" className="btn btn-danger" onClick={() => reset()}>Clear</button>
                            </div>
                        </div>
                    </form>

                    <div className="form-check formcheck">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label tikBox" htmlFor="flexCheckDefault">
                            I accept the privacy & policy
                        </label>
                    </div>

                    <div className="mt-3">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                onChange={handleRecaptchaChange}
                            />
                    </div>
                </div>
            </div>


            <div className="row ">
                <div className="col-md-md-6 countryData ">
                   <h1 className='countryName address3'>Sri Lanka</h1>
                   <h3>Sri Lankan Office</h3>
                            <p className='txt'> <i className="fas fa-map-marker-alt img3 "  ></i>
                                 No 286,<br/>
                                <span className='address'>R. A. De Mel Mawatha,</span><br/>  
                                <span className='address'> col-mdombo 00300,</span> <br />
                                <span className='address'>Sri Lanka .</span><br />
                                <i className="fas fa-phone-volume callIcon3" ></i>Contact: +11 22334455
                            </p>
                </div>
                <div className="col-md-md-6 ">
                    
                </div>
            </div>

        </div>
    );
}

export default Contact;
