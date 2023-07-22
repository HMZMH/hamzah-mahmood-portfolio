import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/Tile3.css'
import 'bootstrap/dist/css/bootstrap.css';

function Tile3() {
    return(

        <div id='tile-3'>
            
            <nav>
                <Link id='link' to="/project2"><h4>Interface Design Project</h4><br/></Link>
            </nav>

        </div>

    );
}

export default Tile3;