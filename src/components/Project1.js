import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project1.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';
import project1diagram1 from '../images/Project1_Diagram1.png';
import project1diagram2 from '../images/Project1_Diagram2.png';
import project1diagram3 from '../images/Project1_Diagram3.png';
import project1diagram4 from '../images/Project1_Diagram4.png';

function Project1() {
  return (
    <div className="container-fluid">

        <div id='project1-fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='project1-content-component' className="row justify-content-center">

        <nav><Link id='link' to="/"><h1>&lt; System Design Project</h1></Link></nav>

            <p>This project entailed designing a web-application,<br/>
            at system level, to meet requirements identified<br/>
            through analysing a provided problem statement.<br/> 
            <br/> 
            The system was designed through UML diagrams:<br/> 
            -Use Case diagrams<br/> 
            -Class diagrams<br/> 
            -Sequence diagrams<br/> 
            </p>
            
            <img id='project1-diagram' alt='project1diagram1' src={project1diagram1}/>       
            <img id='project1-diagram' alt='project1diagram2' src={project1diagram2}/>    
            <img id='project1-diagram' alt='project1diagram3' src={project1diagram3}/>    
            <img id='project1-diagram' alt='project1diagram4' src={project1diagram4}/>
        
        </div>

        <div id='project1-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project1;