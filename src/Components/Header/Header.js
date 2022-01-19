import React from 'react';
import './Header.css'
import pic from '../../images/dOCTORS PROF.jpg'

const Header = () => {
    return (
        <div className="header-container">
            <div className="row ms-5">
                <div className="col-md-5 DoctorLogo">
                    <img style={{ width: "70%" }} class="mt-5" src={pic} alt="" />
                </div>
                <div className="col-md-5 mt-5">
                    <h1 class="text-light fs-1">The Trusted and  <br />Friendly Medical Professionals</h1>
                    <p class="text-light" > Happy to see you healthy </p>
                </div>
            </div>
        </div>
    );
};

export default Header;