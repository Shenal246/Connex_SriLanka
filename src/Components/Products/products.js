import React, { useState } from 'react';
import './products.css';

function Products() {
    const [selectedVendor, setSelectedVendor] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleVendorChange = (event) => {
        setSelectedVendor(event.target.value);
    };

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    return (
        <section>
            <div className="container">
                <div className='row '>
                    <div className="row text headingrow">
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Products</p></div>
                        <div className="col-4" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>

                <div className='row '>
                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example" onChange={handleVendorChange}>
                            <option value="" selected>Search By Vendors</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </select>
                    </div>

                    <div className="col-4">
                        
                    </div>

                    <div className="col-4">
                        <select className="form-select" aria-label="Default select example" onChange={handleProductChange}>
                            <option value="" selected>Search By Products</option>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </select>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Products;
