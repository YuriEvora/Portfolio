import React from 'react';
import { Link, Route } from 'react-router-dom';
import sidbar_img from '../assets/images/side.png';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import facebook from '../assets/icons/facebook.png';
import instagam from '../assets/icons/instagram.png';
import github from '../assets/icons/github.png';
import bitbucket from '../assets/icons/bitbucket.png';
import linkedin from '../assets/icons/linkedin.png';

export default function sidebar(props) {
    return (
        <>
            <img src={sidbar_img} alt='avatar' class="avatar"/>

            <h1>Yuri Evora</h1>

            <div className="links">
                <ul>
                <li><Link to="/"><MaterialIcon icon="home" color='#000000'/>Home</Link></li>
                <li><Link to="/aboutMe"><MaterialIcon icon="account_box" color='#000000'/>About Me</Link></li>
                <li><Link to='/projects'><MaterialIcon icon="work" color='#000000'/>Projects</Link></li>
                <li><Link to="/timeline"><MaterialIcon icon="timeline" color='#000000'/>Timeline</Link></li>
                <li><Link to="/contact"><MaterialIcon icon="contact_mail" color='#000000'/>Contact</Link></li>
                </ul>
            </div>
            
            <div className="social_media">
                <a href="https://www.facebook.com/yuri.evora" target="_blank"><img src={facebook} alt='facebook' class="facebook-icon"/></a>
                <a href="https://www.instagram.com/yuri_evora" target="_blank"><img src={instagam} alt='intagram' class="instagram-icon"/></a>
                <a href="https://www.linkedin.com/in/yurievora" target="_blank"><img src={linkedin} alt='linkedin' class="linkedin-icon"/></a>
                <a href="https://github.com/yurievora" target="_blank"><img src={github} alt='github' class="github-icon"/></a>
                <a href="https://bitbucket.org/yuriEvora" target="_blank"><img src={bitbucket} alt='bitbucket' class="bitbucket-icon"/></a>
            </div>
        </>

    );
}