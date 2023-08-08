import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile2.css'
import 'bootstrap/dist/css/bootstrap.css';
import Interface_Design_Icon from '../images/interface-design-icon.png';

function Tile2() {
    return(

        <div id='tile-2'>
            
            <nav>
                <Link id='link' to="/project2">
                    <div>
                        <h4>Interface Design</h4>
                        <p>Restaurant Kiosk Software</p>
                        <img id='tile-2-img' src={Interface_Design_Icon} alt='Interface design icon'/>
                    </div>
                </Link>
            </nav>

        </div>

    );
}

export default Tile2;