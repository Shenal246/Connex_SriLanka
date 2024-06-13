import React from 'react';
import './SingleVendor.css';

const SingleVendor = ({ vendorName, imageSrc, description, websiteLink }) => {
    return (
        <section>
            <div className="container sectionVendor">
                {/* First Row */}
                <div className='row'>
                    <div className='col-2 imgbgrd'>
                        <img className='vendorpic1' src={imageSrc} alt={vendorName}></img>
                    </div>
                    <div className='col-10'>
                        <h1 className='vendorNameSingle'>{vendorName}</h1>
                    </div>
                </div>

                {/* Second Row */}
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <div className='contentVendor1'>
                            {description}
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>

                {/* Third Row */}
                <div className='row'>
                    <div className='col-12 bton'>
                        <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
                            <button className='websiteButton'>Visit Website</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleVendor;
