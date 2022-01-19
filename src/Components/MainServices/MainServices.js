import React, { useState } from 'react';
import './MainServices.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faCheck, faDiagnoses, faMicroscope } from '@fortawesome/free-solid-svg-icons'
import Ambulance from '../Ambulance/Ambulance';

const MainServices = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="top-Haider-Services">
                <h2>We Are Here To Serve You</h2>
                <p>We have more than 2000 services to offer you in our different branches at very resonable cost with quick support. To know the details about our service details and pricing, you can see our detail price list in just one click.</p>
            </div>
            <div className="ambulance">
                <button onClick={openModal} className="ambulanceBtn"><FontAwesomeIcon icon={faAmbulance} /></button>
                
                <Ambulance modalIsOpen={modalIsOpen} closeModal={closeModal}></Ambulance>

                
            </div>
            <div className="ImagingContainer">
                <div className="ImagingCard">
                    <h1 className="imagingLogo" ><FontAwesomeIcon icon={faMicroscope}/></h1>
                    <h4>Imaging</h4>
                </div>
                <div className="imagingDetailLeft">
                    <p><FontAwesomeIcon icon={faCheck} /> Philips Inginia 3.0Tesla Digital MRI</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Philips Inginia 3.0Tesla Digital MRI</p>
                    <p><FontAwesomeIcon icon={faCheck} /> GE Light Speed 500 slice VCT (CT Scanner)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> GE Prodigy Oracle-Bone Densitometer(BMD)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> SIEMENS Lithotripsy (ESWL)</p>
                </div>
                <div className="imagingDetailRight">
                    <p><FontAwesomeIcon icon={faCheck} /> Philips 12-Channel -ECG</p>
                    <p><FontAwesomeIcon icon={faCheck} /> GE Marquette 12 Channel ECG(Computer Analyzed & Interpreted)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> GE Marquette ETT(Tress ECG)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> GE 24 Hours Holter Monitor (Marquette)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> 24 Hours Ambulatory BP</p>

                </div>
            </div>

            <div className="PathologyContainer">
                <div className="pathologyCard">
                    <h1 className="pathologyLogo" > <FontAwesomeIcon icon={faDiagnoses} /></h1>
                    <h4>Pathology</h4>
                </div>
                <div className="pathologyDetailLeft">
                    <p><FontAwesomeIcon icon={faCheck} /> ( Biochemistry, Immunology, Serology, Microbiology, Clinical Pathology, Histopathology, Molecular Laboratory )</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Haematology – sysmex XN2000 :(Full Automated Reticulocyte Counter & 5 parts Differential Analyzer)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Cobas 6000 (Full Automated Multibatch Biochemistry & Immunology Analyzer)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> BECKMAN Coulter Au 680 (Random Access Multibatch Chemistry Analyzer)</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Abbott-Architect i2000SR (Full Automated Random Access Immunology Analyzer)</p>
                </div>
                <div className="pathologyDetailRight">

                    <p><FontAwesomeIcon icon={faCheck} /> Molecular (PCR) Lab. (HBV-DNA)(HPV-DNA)(HCV-RNA)HCV-RNA Genotype), HLA-B27.</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Microbiology</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Clinical Pathology</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Histopathology</p>
                    <p><FontAwesomeIcon icon={faCheck} /> Cytology</p>
                </div>
            </div>

        </div>
    );
};

export default MainServices;