import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile1.css'
import 'bootstrap/dist/css/bootstrap.css';
import System_Design_Icon from '../images/system-design-icon.png';

function Tile1() {
    return(

        <div id='tile-1'>
            <nav>
                <Link id='link' to="/project1"><h4>System Design</h4>Educational Web App<br/></Link>
            </nav>
            <img id='tile-1-img' src={System_Design_Icon} alt='System design icon'/>
        </div>

    );
}

export default Tile1;