import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project3.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';

function Project3() {
  return (
    <div className="container-fluid">

        <div id='project3-fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='project3-content-component' className="row justify-content-center">

        <nav><Link id='link' to="/"><h1>&lt; Mobile Application Project</h1></Link></nav>

        <p>Frontend - React Native with JavaScript, in VS Code</p>
            <p>Backend - Spring Boot with Java, in IntelliJ</p>
            <p>Database - PostgreSQL</p>
            <p>The project addressed indoor navigation in large buildings.<br/>
                The app utilized trilateration and Dijkstra's algorithms to<br/>
                guide users through indoor spaces, featuring a virtual map<br/>
                and search function. Usability tests and code analysis were<br/>
                performed to ensure a robust and maintainable solution.</p>
        
        </div>

        <div id='project3-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project3;