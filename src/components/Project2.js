import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project2.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';
import project2image1 from '../images/Project2-Image1.png';
import project2image2 from '../images/Project2-Image2.png';
import project2image3 from '../images/Project2-Image3.png';
import project2image4 from '../images/Project2-Image4.png';
import project2image5 from '../images/Project2-Image5.png';

function Project2() {
  return (
    <div className="container-fluid">

        <div id='project2-fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='project2-content-component' className="row justify-content-start">

          <nav>
            <Link id='link' to="/">
              <h3>&lt; Home</h3>
            </Link>
          </nav>

          <h1 className='h1-sections'>System Design Project</h1>

          <p>This project entailed designing a web-application at system level,
          <br/>to meet requirements identified through analysing a provided problem statement.<br/> 
          <br/> 
          The system was designed through UML diagrams:<br/> 
          -Use Case diagrams<br/> 
          -Class diagrams<br/> 
          -Sequence diagrams<br/> 
          </p>
          
          <div className="row justify-content-end">
          <img id='project2-image1' alt='Project2 image1' src={project2image1}/>      
          <img id='project2-image2' alt='Project2 image2' src={project2image2}/>    
          <img id='project2-image3' alt='Project2 image3' src={project2image3}/>    
          <img id='project2-image4' alt='Project2 image4' src={project2image4}/>
          <img id='project2-image5' alt='Project2 image5' src={project2image5}/>
          </div>
      
        </div>

        <div id='project2-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project2;