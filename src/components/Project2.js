import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project2.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';

function Project2() {
  return (
    <div className="container-fluid">

        <div id='project2-fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='project2-content-component' className="row justify-content-center">

        <nav><Link id='link' to="/"><h1>&lt; Interface Design Project</h1></Link></nav>
        
        </div>

        <div id='project2-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project2;