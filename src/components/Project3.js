import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';

function Project3() {
  return (
    <div className="container-fluid">

        <div id='project-fixed-component' className="row justify-content-start">
          <SocialsButtons/>
        </div>

        <div id='project-content-component' className="row justify-content-start">

        <nav>
            <Link id='link' to="/">
              <h3>&lt; Home</h3>
            </Link>
          </nav>

          <h1 className='h1-sections'>UI Usability Engineering</h1>

          <div className='project-paragraphs'>
            <p>
              The project centred around devising a user-friendly design solution through the application of established Usability Engineering (UE) principles. The chosen methodology, the Star Lifecycle, amalgamated familiar Waterfall model stages with unique aspects, emphasising continuous evaluation, iteration, and prioritisation of user needs. The challenge lay in striking the balance between maintaining order while accommodating flexibility. This led to the creation of a Gantt chart to visualise and manage the project's progression.
            </p>

            <p>
              The application of UE principles spanned diverse areas. Conceptual models transformed user requirements into tangible designs, embracing flowcharts, wireframes, and semantic network maps. These models fostered clear communication of functionality and interactions, adhering to natural perceptual organisation and intuitive navigation patterns. Interaction planning involved splitting responsibilities between users and systems to ensure seamless operation, while constraints maintained optimal distance and activity for user engagement.
            </p>

            <p>
              Error prevention and recovery mechanisms, alongside intuitive affordances and metaphors, were integrated to enhance usability. The heuristic analysis and cognitive walkthrough evaluations further refined the design. The former engaged student evaluators, identifying usability issues according to established principles. The latter allowed evaluators to simulate real user interactions and assess the system's performance. These evaluations guided improvements, resulting in a final prototype that embraced user-centric design, optimised interaction, and streamlined usability.
            </p>
          </div>
        
        </div>

        <div id='project-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project3;