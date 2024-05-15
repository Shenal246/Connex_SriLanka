import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {

    return (
        <div className="container">
            <div className='row'>
                <div className="row gy-3 text mb-4">
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='Text'>Let’s Talk</p></div>
                    <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 inputField">
                    

                    {/* <form action='mailto: rivinduamarasinghe1234@gmail.com'> */}
                    <div class="form-floating mb-3">
                        <input type="name" class="form-control" id="floatingInput" placeholder="name" />
                        <label for="floatingInput">Name</label>
                    </div>



                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>

                    <div className="row mt-3 btnContainer">

                        <div className="col-6">
                            <button type="submit" className="btn btn-success ">Submit</button>
                        </div>

                        <div className="col-6 ">
                            <button type="submit" className="btn btn-danger mr-12">Clear</button>
                        </div>
                    </div>
                    {/* </form> */}

                    
                </div>

                

                <div className="col-md-6 inputField">
                    {/* map */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8378227416442!2d79.84946567448274!3d6.909986818552493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25965c4fa5a01%3A0x2773f36f89729e4e!2sConnex%20Information%20Technologies%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1715597396485!5m2!1sen!2slk" className='frame' ></iframe>


                </div>

            </div>


        </div>

    );
}

export default Contact;
