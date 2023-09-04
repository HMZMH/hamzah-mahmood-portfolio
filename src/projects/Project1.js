import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';
import Project1_Image1 from '../projects/project-images/Project1_Image1.png';
import Project1_Image2 from '../projects/project-images/Project1_Image2.png';
import Project1_Image3 from '../projects/project-images/Project1_Image3.png';
import Project1_Image4 from '../projects/project-images/Project1_Image4.png';
import Project1_Image5 from '../projects/project-images/Project1_Image5.png';
import Project1_Image6 from '../projects/project-images/Project1_Image6.png';
import Project1_Image7 from '../projects/project-images/Project1_Image7.png';
import Project1_Image8 from '../projects/project-images/Project1_Image8.png';
import Project1_Image9 from '../projects/project-images/Project1_Image9.png';
import Project1_Image10 from '../projects/project-images/Project1_Image10.png';

function Project1() {
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

        <h2>Web App Development</h2>

        <div className='project-paragraphs'>
          <p>
            I was a member of an Agile team of CS students, where our mission was to develop a web application
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

        <div className='project-images'>
          <img className='individual-image' src={Project1_Image1} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image2} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image3} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image4} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image5} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image6} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image7} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image8} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image9} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project1_Image10} alt='' loading="lazy"></img>
        </div>
              
      </div>

    </div>
  );
}

export default Project1;