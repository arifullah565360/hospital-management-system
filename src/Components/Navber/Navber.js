import React from 'react';
// import { Link } from 'react-router-dom';
import './Navber.css';
const Navber = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navber-bag">
                <div class="container-fluid">
                    <div className="logo"><h3>Farjana Alo Hospital.</h3></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div class="navbar-nav NAbber">
                            <div class="nav-item NavBer-Btn">
                                <a class="nav-link active" aria-current="page" href="/home">Home</a>
                            </div>
                            <div class="nav-item NavBer-Btn">
                                <a class="nav-link active" aria-current="page" href="/about">About</a>
                            </div>
                            <div class="nav-item NavBer-Btn">
                                <a class="nav-link active" aria-current="page" href="/services">Services</a>
                            </div>
                            <div class="nav-item NavBer-Btn">
                                <a class="nav-link active" aria-current="page" href="/doctors">Doctors</a>
                            </div>
                            <div class="nav-item NavBer-Btn">
                                <a class="nav-link active" aria-current="page" href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;