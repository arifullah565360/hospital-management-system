import React from 'react';
import './Ambulance.css';
import Modal from 'react-modal';
import picc from '../../images/Ambulance.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowClose } from '@fortawesome/free-solid-svg-icons'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');


const Ambulance = ({ modalIsOpen, closeModal }) => {



    return (
        <div>
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={closeModal}><FontAwesomeIcon icon={faWindowClose} /></button>
                <div className="modall">
                    <h2>Ambulance Service</h2>
                    <img src={picc} alt="" />
                    <h4>01221451225</h4>
                </div>


            </Modal>
        </div>
    );
};

export default Ambulance;