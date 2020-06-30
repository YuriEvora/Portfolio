import React from 'react';
import home_img from '../../assets/images/home.jpg'
import '../Home/styles.css';

export default function index(props) {
    return(

        <>
            <div className="content">
                
                <img src={home_img} alt='home' className="home"/>                

                <div className="description">
                    <h2>{props.pretitle}</h2>
                    <h1>{props.title}</h1>
                    <h2>{props.subTitle}</h2>
                </div>

            </div>
            
        </>

    );
}