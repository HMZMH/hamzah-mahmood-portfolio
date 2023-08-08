import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile4.css'
import 'bootstrap/dist/css/bootstrap.css';
import Mobile_App_Icon from '../images/mobile-app-icon.png';

function Tile4() {
    return(
        
        <div id='tile-4'>
            <nav>
                <Link id='link' to="/project4">
                    <div>
                        <h4>Fullstack Development</h4>
                        <p>Mobile Chat App</p>
                        <img id='tile-4-img' src={Mobile_App_Icon} alt='Mobile app icon'/>
                    </div>
                </Link>
            </nav>
        </div>

    );
}

export default Tile4;