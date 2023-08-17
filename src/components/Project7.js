import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';
import Project7_Image1 from '../images/project-images/Project7_Image1.png';
import Project7_Image2 from '../images/project-images/Project7_Image2.png';
import Project7_Image3 from '../images/project-images/Project7_Image3.png';
import Project7_Image4 from '../images/project-images/Project7_Image4.png';
import Project7_Image5 from '../images/project-images/Project7_Image5.png';
import Project7_Image6 from '../images/project-images/Project7_Image6.png';
import Project7_Image7 from '../images/project-images/Project7_Image7.png';
import Project7_Image8 from '../images/project-images/Project7_Image8.png';
import Project7_Image9 from '../images/project-images/Project7_Image9.png';
import Project7_Image10 from '../images/project-images/Project7_Image10.png';
import Project7_Image11 from '../images/project-images/Project7_Image11.png';
import Project7_Image12 from '../images/project-images/Project7_Image12.png';
import Project7_Image13 from '../images/project-images/Project7_Image13.png';
import Project7_Image14 from '../images/project-images/Project7_Image14.png';

function Project7() {
  return (
    <div className="container-fluid">

      <div className='fixed-component'><SocialsButtons/></div>

      <div id='project-content-component' className="row justify-content-start">

      <nav>
          <Link id='link' to="/">
            <h3>&lt; Home</h3>
          </Link>
        </nav>

        <h1 className='h1-sections'>Mobile App Design</h1>

        <div className='project-paragraphs'>
          <p>
          In this project, we address the common challenges homeowners face when encountering issues in their homes or gardens that require professional assistance. To streamline the process of finding trustworthy tradesmen, we propose an intermediary app that allows users to describe their problems and receive curated profiles of verified tradesmen with relevant expertise. The app features a safety-enhancing rating system based on verified customer feedback.
          </p>
          <p>
          Our agile approach involves defined roles, including the Product Owner and rotating Scrum Master. We generated user stories to outline requirements, prioritizing them in a product backlog. Through collaborative refinement meetings, we broke down the epic user story into manageable tasks for development. Our sprint planning relied on estimating team velocity to determine high-priority stories for the sprint backlog.
          </p>
          <p>
          My role in the project was centered around addressing these challenges and shaping the app's development. Initially serving as the Product Owner, I contributed to defining the project's scope and goals. I actively participated in planning, generating user stories, and shaping the requirements. In addition, I engaged in pair-designing for the app's frontend UI. Collaborating remotely, my partner and I efficiently designed UI elements, ensuring consistency and functionality. This collaborative approach, coupled with maintaining a steady pace, allowed us to deliver high-quality designs within the project's timeframe.
          </p>
          <p>
          Reflecting on our methodologies, I found pair-designing to be highly effective in enhancing engagement and efficiency. The real-time feedback and collaborative environment enabled informed design decisions, contributing to the success of the UI. While we embraced Scrum, I believe Extreme Programming (XP) could have provided more flexibility for our project. XP's emphasis on continuous feedback, testing, and adaptability aligns well with our project's diverse feature set and evolving requirements.
          </p>
        </div>

        <div className='project-images'>
          <img src={Project7_Image1} alt=''></img>
          <img src={Project7_Image2} alt=''></img>
          <img src={Project7_Image3} alt=''></img>
          <img src={Project7_Image4} alt=''></img>
          <img src={Project7_Image5} alt=''></img>
          <img src={Project7_Image6} alt=''></img>
          <img src={Project7_Image7} alt=''></img>
          <img src={Project7_Image8} alt=''></img>
          <img src={Project7_Image9} alt=''></img>
          <img src={Project7_Image10} alt=''></img>
          <img src={Project7_Image11} alt=''></img>
          <img src={Project7_Image12} alt=''></img>
          <img src={Project7_Image13} alt=''></img>
          <img src={Project7_Image14} alt=''></img>
        </div>

        <div className='footer' style={{maxHeight:'9vh'}}></div>
      
      </div>

      <div className='fixed-component'><AccessButtons/></div>

    </div>
  );
}

export default Project7;