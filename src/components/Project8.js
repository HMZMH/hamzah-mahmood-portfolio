import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButton from './SocialsButton.js';
import Project8_Image1 from '../images/project-images/Project8_Image1.png';
import Project8_Image2 from '../images/project-images/Project8_Image2.png';
import Project8_Image3 from '../images/project-images/Project8_Image3.png';
import Project8_Image4 from '../images/project-images/Project8_Image4.png';
import Project8_Image5 from '../images/project-images/Project8_Image5.png';
import Project8_Image6 from '../images/project-images/Project8_Image6.png';
import Project8_Image7 from '../images/project-images/Project8_Image7.png';
import Project8_Image8 from '../images/project-images/Project8_Image8.png';
import Project8_Image9 from '../images/project-images/Project8_Image9.png';
import Project8_Image10 from '../images/project-images/Project8_Image10.png';
import Project8_Image11 from '../images/project-images/Project8_Image11.png';
import Project8_Image12 from '../images/project-images/Project8_Image12.png';
import Project8_Image13 from '../images/project-images/Project8_Image13.png';
import Project8_Image14 from '../images/project-images/Project8_Image14.png';
import Project8_Image15 from '../images/project-images/Project8_Image15.png';
import Project8_Image16 from '../images/project-images/Project8_Image16.png';
import Project8_Image17 from '../images/project-images/Project8_Image17.png';
import Project8_Image18 from '../images/project-images/Project8_Image18.png';
import Project8_Image19 from '../images/project-images/Project8_Image19.png';
import Project8_Image20 from '../images/project-images/Project8_Image20.png';
import Project8_Image21 from '../images/project-images/Project8_Image21.png';
import Project8_Image22 from '../images/project-images/Project8_Image22.png';
import Project8_Image23 from '../images/project-images/Project8_Image23.png';
import Project8_Image24 from '../images/project-images/Project8_Image24.png';
import Project8_Image25 from '../images/project-images/Project8_Image25.png';
import Project8_Image26 from '../images/project-images/Project8_Image26.png';
import Project8_Image27 from '../images/project-images/Project8_Image27.png';
import Project8_Image28 from '../images/project-images/Project8_Image28.png';
import Project8_Image29 from '../images/project-images/Project8_Image29.png';
import Project8_Image30 from '../images/project-images/Project8_Image30.png';
import Project8_Image31 from '../images/project-images/Project8_Image31.png';
import Project8_Image32 from '../images/project-images/Project8_Image32.png';
import Project8_Image33 from '../images/project-images/Project8_Image33.png';
import Project8_Image34 from '../images/project-images/Project8_Image34.png';
import Project8_Image35 from '../images/project-images/Project8_Image35.png';
import Project8_Image36 from '../images/project-images/Project8_Image36.png';

function Project8() {
  return (
    <div className="fluid-container">

      <div className='socials-component' style={{zIndex:'999'}}>
        <SocialsButton/>
      </div>

      <div className='content-component'>

      <div style={{height:'10vh'}}></div>

      <nav>
        <Link to="/#project-section">
          <h3>🡐</h3>
        </Link>
      </nav>

        <h1 className='h1-sections'>Mobile App Development</h1>

        <div className='project-paragraphs'>
          <p>
            In this mobile app development project, I designed and implemented an indoor navigation solution to address the challenges of navigating complex buildings. The project involved creating a user-friendly app that could guide users through unfamiliar indoor spaces. The technical challenges included accurate position-finding and efficient route-finding, crucial for a seamless navigation experience.
          </p>

          <p>
            To address these challenges, I employed a trilateration algorithm to determine the user's position using WiFi signals from beacons placed throughout the building. The use of Dijkstra's algorithm enabled the app to find optimal routes from the user's current location to their destination. I followed a Test-Driven Development (TDD) approach, ensuring the app's functionality by writing automated tests for each component.
          </p>

          <p>
            The project adhered to the principles of maintainability and readability, with code organized into distinct backend and frontend components. I implemented the Model-View-Controller (MVC) architecture, ensuring clear separation between data, user interface, and logic. The backend Java classes were organized by layers, while the frontend JavaScript files were grouped by screens to reflect the user interface flow.
          </p>

          <p>
            A key highlight was the observational study conducted to evaluate the app's usability. Participants navigated the app, providing insights into its user-friendliness. The results showcased intuitive navigation and quick learning curves, validating the app's design. Despite challenges, such as interference with WiFi signals and algorithmic efficiency, the project succeeded in creating a foundation for an indoor navigation solution that is both practical and scalable.
          </p>
        </div>

        <div className='project-images'>
          <img className='individual-image' src={Project8_Image1} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image2} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image3} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image4} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image5} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image6} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image7} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image8} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image9} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image10} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image11} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image12} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image13} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image14} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image15} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image16} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image17} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image18} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image19} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image20} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image21} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image22} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image23} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image24} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image25} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image26} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image27} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image28} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image29} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image30} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image31} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image32} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image33} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image34} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image35} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project8_Image36} alt='' loading="lazy"></img>
        </div>

      </div>

      <div style={{height:'5vh'}}></div>

    </div>
  );
}

export default Project8;