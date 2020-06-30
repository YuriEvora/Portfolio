import React from 'react';
import '../Projects/styles.css';

export default function index(props) {
    return(

        <div className="content">
            <div className="projects">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>

            <div className="cards">
                
                <div className="item">
                    <h2>GitHub</h2>
                </div>

                <div className="item">
                    <h2>BitBucket</h2>

                </div>

            </div>
        </div>
    );
}