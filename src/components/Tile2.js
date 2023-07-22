import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/Tile2.css'
import 'bootstrap/dist/css/bootstrap.css';

function Tile2() {
    return(

        <div id='tile-2'>
            <nav>
                <Link id='link' to="/project1"><h4>System Design Project</h4><br/></Link>
            </nav>
        </div>

    );
}

export default Tile2;