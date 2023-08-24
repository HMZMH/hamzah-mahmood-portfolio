import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from './SocialsButton.js';
import AccessButtons from './AccessButtons.js';
import Project1_Image1 from '../images/project-images/Project1_Image1.png';
import Project1_Image2 from '../images/project-images/Project1_Image2.png';
import Project1_Image3 from '../images/project-images/Project1_Image3.png';
import Project1_Image4 from '../images/project-images/Project1_Image4.png';
import Project1_Image5 from '../images/project-images/Project1_Image5.png';
import Project1_Image6 from '../images/project-images/Project1_Image6.png';
import Project1_Image7 from '../images/project-images/Project1_Image7.png';
import Project1_Image8 from '../images/project-images/Project1_Image8.png';
import Project1_Image9 from '../images/project-images/Project1_Image9.png';
import Project1_Image10 from '../images/project-images/Project1_Image10.png';

function Project1() {
  return (
    <div className="container-fluid">

        <div className='fixed-component'><SocialsButtons/></div>

        <div id='project-content-component' className="row justify-content-start">

          <nav>
            <Link id='return-link' className='link' to="/#project-section" style={{position:'absolute'}}>
              <h3>&lt;</h3>
            </Link>
          </nav>

          <br/><br/>

          <h1 className='h1-sections'>Web App Development</h1>

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

          <div style={{height:'7.5vh'}}></div>
                
        </div>

        <div className='fixed-component'>
         <a className="scroll-button" href='#return-link'>^</a>
        </div>

        <div className='fixed-component' style={{marginTop:'4vh'}}><AccessButtons/></div>

    </div>
  );
}

export default Project1;