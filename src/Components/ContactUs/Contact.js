import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const formRef = useRef();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/send-email', data);
            console.log(response.data);
            reset();
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className="row gy-3 text mb-4" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
                    <div className="col-4"><hr /></div>
                    <div className="col-4"><p id='Text'>Let’s Talk</p></div>
                    <div className="col-4"><hr /></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 inputField" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50">
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name" {...register('name', { required: true })} />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" {...register('email', { required: true })} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" {...register('comments', { required: true })}></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                        <div className="row mt-3 btnContainer">
                            <div className="col-6">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                            <div className="col-6">
                                <button type="reset" className="btn btn-danger" onClick={() => reset()}>Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 inputField" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="50">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8378227416442!2d79.84946567448274!3d6.909986818552493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25965c4fa5a01%3A0x2773f36f89729e4e!2sConnex%20Information%20Technologies%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1715597396485!5m2!1sen!2slk" className='frame' title="Company Location"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
