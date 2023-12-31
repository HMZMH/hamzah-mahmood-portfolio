import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';

function Project6() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

      <nav>
          <Link to="/#project-section" style={{textDecoration:'none'}}>
            <h2>&lt; HCI Research Analysis</h2>
            <br/>
          </Link>
        </nav>

        <div className='project-paragraphs'>
          <p>
          This project delves into the research paper titled 'Switching Between Standard Pointing Methods with Current and Emerging Computer Form Factors' by Foley et al. (2022). The central inquiry revolves around the cost of switching between various pointing methods, such as absolute touch, absolute pen, relative mouse, and relative trackpad. The term 'cost' refers to the impact on user performance, measured by speed of use. Existing knowledge in the field reveals that absolute pointing is faster but less accurate than relative pointing, particularly using a mouse. The study draws primarily from the domain of Human Factors and Ergonomics, incorporating methods like questionnaires, experiments, and interviews to gather data.
          </p>

          <p>
          This research brings new empirical insights by examining the performance impact of switching between different pointing methods. The paper introduces a modified research method based on the 'subtraction method' from mode-switching studies, adapting it for measuring switching time between pointing methods with asymmetric performance. The findings contribute to the design of pointing devices, aiding both manufacturers and end-users in enhancing usability. Although the authors briefly highlight the research's potential to inform interaction design, the significance of the research could have been more explicitly demonstrated.
          </p>

          <p>
          The study's research methods include questionnaires, experiments, and interviews. Questionnaires gather demographic information and subjective feedback, while experiments replicate real-world scenarios to collect data on switching and docking times. Despite methodological rigor demonstrated through internal and statistical validity, the research's external validity raises concerns due to participant and device limitations. The project contributes to Human-Computer Interaction (HCI) knowledge by offering concrete data and insights that can aid designers, manufacturers, and researchers in creating more efficient and user-friendly computer form factors and pointing devices.
          </p>
        </div>
      
      </div>

    </div>
  );
}

export default Project6;