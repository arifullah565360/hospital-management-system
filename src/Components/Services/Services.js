import React from 'react';
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagnoses, faMicroscope } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

const Services = () => {


    return (
        <div>
            <div className="Services-title">
                <h2>Our Services</h2>
                <p>We are committed to provide affordable services, without any compromise on the quality of service so that you are able to remain happy.</p>

            </div>
            <div className="Services-Container">
                <div className="Services-Imaging">
                <h3><FontAwesomeIcon icon={faMicroscope} />  Imaging</h3>
                    <p>Diagnostic Centre Ltd. is an advanced Centre providing the diagnostic imaging services in an elevated ambience, completed by service and report efficiency.</p>
                    <a href="/services"><button className="ReadMoreBtn">Read More</button> </a>
                </div>
                <div className="Services-Imaging">
                    <h3><FontAwesomeIcon icon={faDiagnoses} />  Pathology</h3>
                    <p>Our Pathology division offers a comprehensive range of laboratory tests for diagnosis, management and prevention of a wide variety of diseases.</p>
                    <a href="/services"><button className="ReadMoreBtn">Read More</button> </a>
                </div>
            </div>
        </div>
    );
};

export default Services;