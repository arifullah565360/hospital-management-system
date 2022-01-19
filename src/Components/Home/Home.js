import React from 'react';
import   './Home.css'
import Header from '../Header/Header';
import Services from '../Services/Services'
import Doct1 from '../../images/dOCTOR 1.jpg';
import Doct2 from '../../images/Doctor 2.jpg';
import Doct3 from '../../images/Doctor 3.jpg'
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="titelll">Our Doctors</h1>
            <div className="doctor-container">
                
                <div className="doctor-details">
                    <img src={Doct1} alt="" />
                    <h4>Shadat Hossain</h4>
                    <p>General Surgery</p>
                </div>
                <div className="doctor-details">
                <img src={Doct2} alt="" />
                    <h4>Farzana Alo</h4>
                    <p>Medicine</p>
                </div>
                <div className="doctor-details">
                <img src={Doct3} alt="" />
                    <h4>Nazamol Shakib</h4>
                    <p>Gastroenterology</p>
                </div>
            </div>
            <Services></Services>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;