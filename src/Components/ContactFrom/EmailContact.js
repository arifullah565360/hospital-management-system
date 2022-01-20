import React from 'react';
import emailjs from 'emailjs-com';
import './EmailContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone } from '@fortawesome/free-solid-svg-icons'

const EmailContact = () => {

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service', 'template_bq3yhw5', e.target, 'user_o2xGVEbJzyGQhXKK0xXwH')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        e.target.reset()
      }

    return (
        <div className="container-border">
            <h6>Ambulance Service</h6>

            <h4><FontAwesomeIcon icon={faPhone} /> 01221451225</h4>
            <p>Or</p>
            <h3>Contact From</h3>
            <from onSubmit={sendEmail}className="row" style={{ margin: "25px 85px 75px 100px" }} >
                <lebel>Name</lebel>
                <input type="text" name="name" className="form-control" />

                <level>Email</level>
                <input type="email" name="user_email" className="form-control" />

                <level>Message</level>
                <textarea name="message" rows="4" />

                <input type="submit" value="Send" className="form-control btn-primary" style={{ marginTop: "10px" }} />
            </from>
        </div>
    );
};

export default EmailContact;