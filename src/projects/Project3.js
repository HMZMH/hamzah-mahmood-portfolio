import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';
import Project3_Image1 from '../projects/project-images/Project3_Image1.png';
import Project3_Image2 from '../projects/project-images/Project3_Image2.png';
import Project3_Image3 from '../projects/project-images/Project3_Image3.png';
import Project3_Image4 from '../projects/project-images/Project3_Image4.png';
import Project3_Image5 from '../projects/project-images/Project3_Image5.png';
import Project3_Image6 from '../projects/project-images/Project3_Image6.png';
import Project3_Image7 from '../projects/project-images/Project3_Image7.png';
import Project3_Image8 from '../projects/project-images/Project3_Image8.png';
import Project3_Image9 from '../projects/project-images/Project3_Image9.png';
import Project3_Image10 from '../projects/project-images/Project3_Image10.png';
import Project3_Image11 from '../projects/project-images/Project3_Image11.png';
import Project3_Image12 from '../projects/project-images/Project3_Image12.png';
import Project3_Image13 from '../projects/project-images/Project3_Image13.png';
import Project3_Image14 from '../projects/project-images/Project3_Image14.png';
import Project3_Image15 from '../projects/project-images/Project3_Image15.png';
import Project3_Image16 from '../projects/project-images/Project3_Image16.png';

function Project3() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

        <nav>
          <Link to="/#project-section">
            <h3>🡐</h3>
          </Link>
        </nav>

        <h2>UI Usability Engineering</h2>

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
      
      </div>

    </div>
  );
}

export default Project3;