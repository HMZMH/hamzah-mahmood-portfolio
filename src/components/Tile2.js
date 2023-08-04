import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile2.css'
import 'bootstrap/dist/css/bootstrap.css';
import Interface_Design_Icon from '../images/interface-design-icon.png';

function Tile2() {
    return(

        <div id='tile-2'>
            
            <nav>
                <Link id='link' to="/project2"><h4>Interface Design</h4>Restaurant Kiosk Software<br/></Link>
            </nav>
            <img id='tile-2-img' src={Interface_Design_Icon} alt='Interface design icon'/>

        </div>

    );
}

export default Tile2;