import React from 'react';
import './Authentication.css';
import ven1 from '../../../../images/vendorLogos/1.png';
import ven2 from '../../../../images/vendorLogos/10.png';


function Authentication() {
    return (
        <section>
            <div className="container">
                <div className='row '>
                    <div className="row text headingrow">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Authentication & Identity Management</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowmargin">
                    <div className="col">

                        <div class="card h-100">
                            <img src={ven1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title vendorTitel">Card title</h5>
                            </div>
                        </div>

                    </div>
                    <div className="col">

                        <div class="card h-100">
                            <img src={ven2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title vendorTitel">Card title</h5>
                            </div>
                        </div>

                    </div>
                   
                </div>
            </div>
        </section>
    );
}

export default Authentication;
