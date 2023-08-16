import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';

function Project8() {
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
        
        </div>

        <div id='project-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project8;