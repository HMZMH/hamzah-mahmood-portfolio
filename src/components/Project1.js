import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';

function Project1() {
  return (
    <div className="container-fluid">

        <div id='project-fixed-component' className="row justify-content-start">
          <SocialsButtons/>
        </div>

        <div id='project-content-component' className="row justify-content-start">

          <nav>
            <Link id='link' to="/#project-section">
              <h3>&lt; Home</h3>
            </Link>
          </nav>

          <h1 className='h1-sections'>Web App Development</h1>

          <div className='project-paragraphs'>
            <p>
              I was a dedicated member of an Agile team of CS students, where our mission was to develop a web application
              addressing a UN Sustainable Development Goal (SDG). Our chosen SDG was to provide accessible education through a
              'study app' aimed at teaching Key Stage 2 topics to underserved children. This application combined informative
              reading materials with interactive quizzes, fostering learning for those without access to traditional educational
              resources.
            </p>
            <p>
              Throughout the project, I took on multiple roles as a software developer, team player, and leader. I actively
              contributed during the ideation phase, advocating for SDG 4 - Quality Education, which our group ultimately
              selected. I played a key role in requirement analysis, creating user stories, and designing features like user
              interfaces, night mode, and progress tracking. As a sprint lead and product owner, I managed tasks, coordinated team
              efforts, and ensured project progress aligned with our goals.
            </p>
            <p>
              This experience allowed me to expand my technical skills by working with React, JavaScript, and collaborative tools
              like GitHub. Beyond technical growth, I enhanced my leadership abilities, adapting to challenges, and fostering
              effective communication within our team. This project has been a transformative journey, equipping me with valuable
              insights into software development, teamwork, and problem-solving that will undoubtedly shape my future endeavors.
            </p>
          </div>
                
        </div>

        <div id='project-fixed-component' className="row justify-content-start">
          <AccessButtons/>
        </div>

    </div>
  );
}

export default Project1;