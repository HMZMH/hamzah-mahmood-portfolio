import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/Tile4.css'
import 'bootstrap/dist/css/bootstrap.css';

function Tile4() {
    return(

        <div id='tile-4'>
            
            <h4>Mobile Application Project</h4><br/>
            <p>Frontend - React Native with JavaScript, in VS Code</p>
            <p>Backend - Spring Boot with Java, in IntelliJ</p>
            <p>Database - PostgreSQL</p>
            <p>The project addressed indoor navigation in large buildings.<br/>
                The app utilized trilateration and Dijkstra's algorithms to<br/>
                guide users through indoor spaces, featuring a virtual map<br/>
                and search function. Usability tests and code analysis were<br/>
                performed to ensure a robust and maintainable solution.</p>

        </div>

    );
}

export default Tile4;