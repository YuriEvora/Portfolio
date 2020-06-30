import React from 'react';
import '../Contact/styles.css';
import Form from '../../components/form'

import gmail from '../../assets/icons/gmail.png';

export default function index(props) {
    return(

        <div className="content">
            <div className="contact-me">
                <h1>{props.title}</h1>
                <h2>{props.description}</h2>
            </div>

            <div className="email">
                <img src={gmail} alt='gmail' class="gmail-icon"/><h2>evorayuri11@gmail.com</h2>
            </div>

            <div className="form">
                <Form />
            </div>

        </div>

    );
}