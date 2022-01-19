import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer-container-left">
            <h4>Our Location</h4>
            <p>221/10A,GazipurDhaka</p>
            <p>Hotline:++2255***</p>
            <p>diagnosticHospitalltd@gmail.com</p>
        </div>
            <div className="footer-container-right">
                <h4>Diagnostic Hospital LTD</h4>
                    <p>Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta justo at velna auctor congue</p>
                    <p>Emergency Cases <br/> <FontAwesomeIcon icon={faPhone} />+8801545544** </p>
                    <p> </p>
            </div>
        </div>
    );
};

export default Footer;