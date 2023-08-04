import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile4.css'
import 'bootstrap/dist/css/bootstrap.css';
import Mobile_App_Icon from '../images/mobile-app-icon.png';

function Tile4() {
    return(

        <div id='tile-4'>
            <nav>
                <Link id='link' to="/project4"><h4>Fullstack Development</h4>Mobile Chat App<br/></Link>
            </nav>
            <img id='tile-4-img' src={Mobile_App_Icon} alt='Mobile app icon'/>
        </div>

    );
}

export default Tile4;