import React from 'react';
import './Ambulance.css';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWindowClose } from '@fortawesome/free-solid-svg-icons'
import EmailContact from '../ContactFrom/EmailContact';


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

                
                <div className="modall">
                    <button onClick={closeModal}><FontAwesomeIcon icon={faWindowClose} /></button>
                    <EmailContact></EmailContact>
                </div>


            </Modal>
        </div>
    );
};

export default Ambulance;