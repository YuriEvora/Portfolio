import React from 'react';
import '../AboutMe/styles.css';

export default function index(props) {
    return(

        <div className="content">
            <div className="about">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>

            <div className="fields">
                <h1>{props.subTitle}</h1>

                <div className="cards">
                    
                    <div className="item">
                        <h2>Development</h2>
                        <p>I'm trying to boost my knowledge in terms of C, JAVA, HTML, CSS, JS/React, PHP...</p>
                    </div>

                    <div className="item">
                        <h2>Computer Network</h2>
                        <p>I'm interested in learning more about it and practicing the knowledge already learned.</p>
                    </div>

                </div>

            </div>
        </div>

    );
}