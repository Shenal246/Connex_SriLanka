import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentication.css';
import axios from "axios";
import connections from '../../../../config';
// import { useNavigate } from 'react-router-dom';
function Authentication() {
    const [vendors, setVendors] = useState([]);
    const serverlink = connections.serverLink;
    const navigate = useNavigate();

    useEffect(() => {
        const values = {
            query: "SELECT name,des,wlink,status,image_data,cnt,Authentication_Identity_Management FROM Vendor WHERE Authentication_Identity_Management='true' AND status=1 AND cnt=1;",
            key: "Cr6re8VRBm"
        };

        axios.post(serverlink, values).then((response) => {
            setVendors(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [serverlink]);

    const handleCardClick = (vend) => {
        navigate(`/SL/Solutions/Authentication/${vend.name}`, { state: { vend } });
    };

    return (
        <section className='heroSolution'>
            <div className="container">
                <div className='row'>
                    <div className="row text headingrow">
                        <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                        <div className="col-6" data-aos="fade-up" data-aos-delay="100"><p id='topic'>Authentication & Identity Management</p></div>
                        <div className="col-3" data-aos="fade-up" data-aos-delay="100"><hr /></div>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 rowmargin">
                    {vendors && vendors.map((vend, index) => (
                        <div className="col" key={index}>
                            <div className="card h-100" onClick={() => handleCardClick(vend)}>
                                {vend.image_data ? (
                                    <img
                                        src={`data:image/jpeg;base64,${vend.image_data}`}
                                        alt={vend.name}
                                        className="card-img-top"
                                    />
                                ) : (
                                    <p>No Image Available</p>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title vendorTitel">{vend.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Authentication;
