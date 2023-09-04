import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';
import Project2_Image1 from '../projects/project-images/Project2_Image1.png';
import Project2_Image2 from '../projects/project-images/Project2_Image2.png';
import Project2_Image3 from '../projects/project-images/Project2_Image3.png';
import Project2_Image4 from '../projects/project-images/Project2_Image4.png';
import Project2_Image5 from '../projects/project-images/Project2_Image5.png'

function Project2() {
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

        <h2>Software System Design</h2>

        <div className='project-paragraphs'>
          <p>
            For an individual project, I directed my efforts towards architecting a robust system for an innovative learning platform. This endeavour delved into the technical intricacies of the architecture, with a significant emphasis on utilising UML diagrams to streamline the design process.            
            The crux of the project lay in empowering both students and tutors through a sophisticated web application. My role involved designing an intricate architecture that seamlessly integrated diverse components, building upon prior research and frontend development completed in a group project.
          </p>

          <p>
            One of the critical technical tools employed was UML diagrams. Use case diagrams facilitated a clear visualisation of user interactions, guiding the alignment of functionalities with user needs. Sequence diagrams captured dynamic interactions, illustrating the flow of operations and data exchange.
            Additionally, class diagrams offered a blueprint for structuring the system's classes and relationships, optimising code organisation and reusability. This technical focus enabled efficient collaboration between developers and ensured that the architecture aligned with the learning platform's transformative goals.
          </p>

          <p>
            The project's outcome was a meticulously designed architecture that seamlessly merged gamification elements, comprehensive support features, and a well-orchestrated educational experience. The designs can now be used for a web app which hopes to bridge educational gaps and empower young learners on their educational journey.
          </p>
        </div>

        <div className='project-images'>
          <img className='individual-image' src={Project2_Image1} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project2_Image2} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project2_Image3} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project2_Image4} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project2_Image5} alt='' loading="lazy"></img>
        </div>
    
      </div>

    </div>
  );
}

export default Project2;