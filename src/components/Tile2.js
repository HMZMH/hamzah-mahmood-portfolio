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

            <p>This project entailed designing a web-application,<br/>
            at system level, to meet requirements identified<br/>
            through analysing a provided problem statement.<br/> 
            <br/> 
            The system was designed through UML diagrams:<br/> 
            -Use Case diagrams<br/> 
            -Class diagrams<br/> 
            -Sequence diagrams<br/> 
            </p>
        </div>

    );
}

export default Tile2;