import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';
import Project5_Image1 from '../projects/project-images/Project5_Image1.png';
import Project5_Image2 from '../projects/project-images/Project5_Image2.png';
import Project5_Image3 from '../projects/project-images/Project5_Image3.png';
import Project5_Image4 from '../projects/project-images/Project5_Image4.png';
import Project5_Image5 from '../projects/project-images/Project5_Image5.png';
import Project5_Image6 from '../projects/project-images/Project5_Image6.png';
import Project5_Image7 from '../projects/project-images/Project5_Image7.png';

function Project5() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

      <nav>
          <Link to="/#project-section" style={{textDecoration:'none'}}>
            <h2>&lt; System Metrics Analysis</h2>
            <br/>
          </Link>
        </nav>

        <div className='project-paragraphs'>
          <p>
          In this project, I conducted an in-depth analysis and comparison of two systems, namely System 1 and System 6, to evaluate their code quality. Utilizing Chidamber & Kemerer (C&K) metrics including Coupling Between Objects (CBO), Lack of Cohesion of Methods (LCOM), and the number of bugs, I aimed to determine aspects of good or bad code quality within each system. CBO highlights the degree of class coupling, while LCOM assesses class cohesiveness. The presence of bugs directly reflects software flaws.
          </p>

          <p>
          My analysis revealed interesting insights through various charts and metrics. System 6 demonstrated better code quality compared to System 1, as evident from significantly lower CBO and LCOM values. However, System 6 surprisingly exhibited more bugs than System 1, despite the better CBO and LCOM scores. Correlation analysis indicated that increased coupling is linked to a higher number of bugs.
          </p>

          <p>
          The project's findings indicated the presence of bad code smells and high complexity in both systems. The systems' structures required refactoring to address these issues. Extract class refactoring was suggested to improve cohesion, while adhering to the Law of Demeter (LoD) was recommended to enhance coupling. Refactoring presented an opportunity to transition from poor code quality to improved code quality by reducing bugs and maintenance costs.
          </p>
        </div>

        <div className='project-images'>
          <img className='individual-image' src={Project5_Image1} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project5_Image2} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project5_Image3} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project5_Image4} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project5_Image5} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project5_Image6} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project5_Image7} alt='' loading="lazy"></img>
        </div>

      </div>

    </div>
  );
}

export default Project5;