import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from './SocialsButton.js';
import AccessButtons from './AccessButtons.js';
import Project3_Image1 from '../images/project-images/Project3_Image1.png';
import Project3_Image2 from '../images/project-images/Project3_Image2.png';
import Project3_Image3 from '../images/project-images/Project3_Image3.png';
import Project3_Image4 from '../images/project-images/Project3_Image4.png';
import Project3_Image5 from '../images/project-images/Project3_Image5.png';
import Project3_Image6 from '../images/project-images/Project3_Image6.png';
import Project3_Image7 from '../images/project-images/Project3_Image7.png';
import Project3_Image8 from '../images/project-images/Project3_Image8.png';
import Project3_Image9 from '../images/project-images/Project3_Image9.png';
import Project3_Image10 from '../images/project-images/Project3_Image10.png';
import Project3_Image11 from '../images/project-images/Project3_Image11.png';
import Project3_Image12 from '../images/project-images/Project3_Image12.png';
import Project3_Image13 from '../images/project-images/Project3_Image13.png';
import Project3_Image14 from '../images/project-images/Project3_Image14.png';
import Project3_Image15 from '../images/project-images/Project3_Image15.png';
import Project3_Image16 from '../images/project-images/Project3_Image16.png';

function Project3() {
  return (
    <div className="container-fluid">

      <div className='fixed-component'><SocialsButtons/></div>

      <div id='project-content-component' className="row justify-content-start">

       <nav>
          <Link id='return-link' className='link' to="/" style={{position:'absolute'}}>
            <h3>&lt;</h3>
          </Link>
        </nav>

        <br/><br/>

        <h1 className='h1-sections'>UI Usability Engineering</h1>

        <div className='project-paragraphs'>
          <p>
            The project centred around devising a user-friendly design interface solution, for a restaurant kiosk that can be operated without physical touch, through the application of established Usability Engineering (UE) principles. The chosen methodology, the Star Lifecycle, amalgamated familiar Waterfall model stages with unique aspects, emphasising continuous evaluation, iteration, and prioritisation of user needs. The challenge lay in striking the balance between maintaining order while accommodating flexibility. This led to the creation of a Gantt chart to visualise and manage the project's progression.
          </p>

          <p>
            The application of UE principles spanned diverse areas. Conceptual models transformed user requirements into tangible designs, embracing flowcharts, wireframes, and semantic network maps. These models fostered clear communication of functionality and interactions, adhering to natural perceptual organisation and intuitive navigation patterns. Interaction planning involved splitting responsibilities between users and systems to ensure seamless operation, while constraints maintained optimal distance and activity for user engagement.
          </p>

          <p>
            Error prevention and recovery mechanisms, alongside intuitive affordances and metaphors, were integrated to enhance usability. The heuristic analysis and cognitive walkthrough evaluations further refined the design. The former engaged student evaluators, identifying usability issues according to established principles. The latter allowed evaluators to simulate real user interactions and assess the system's performance. These evaluations guided improvements, resulting in a final prototype that embraced user-centric design, optimised interaction, and streamlined usability.
          </p>
        </div>

        <div className='project-images'>
          <img className='individual-image' src={Project3_Image1} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image2} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image3} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image4} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image5} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image6} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image7} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image8} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image9} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image10} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image11} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image12} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image13} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image14} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image15} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project3_Image16} alt='' loading="lazy"></img>
        </div>

        <div style={{height:'7.5vh'}}></div>
      
      </div>
      
      <div className='fixed-component'><AccessButtons/></div>

    </div>
  );
}

export default Project3;