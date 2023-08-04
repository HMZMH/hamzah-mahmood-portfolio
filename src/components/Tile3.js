import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile3.css'
import 'bootstrap/dist/css/bootstrap.css';
import Mobile_App_Icon from '../images/mobile-app-icon.png';

function Tile3() {
    return(

        <div id='tile-3'>
            <nav>
                <Link id='link' to="/project3"><h4>Fullstack Development</h4>Indoor Navigation Mobile App<br/></Link>
            </nav>
            <img id='tile-3-img' src={Mobile_App_Icon} alt='Mobile app icon'/>
        </div>

    );
}

export default Tile3;