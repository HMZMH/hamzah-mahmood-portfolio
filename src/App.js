import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButtons from './components/SocialsButtons.js';
import AccessButtons from './components/AccessButtons.js';
import AboutMe from './components/AboutMe.js';
import Tiles from './components/Tiles.js';
import Project1 from './components/Project1.js';
import Project2 from './components/Project2.js';
import Project3 from './components/Project3.js';
import Project4 from './components/Project4.js';
import Project5 from './components/Project5.js';
import Project6 from './components/Project6.js';
import Project7 from './components/Project7.js';
import Project8 from './components/Project8.js';
import ContactMe from './components/ContactMe.js';

function Home() {
  return(

    <div className="container-fluid">

        <div id='fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='content-component' className="row justify-content-start">

          <h1 style={{fontSize: "75px", marginTop: "45vh"}}>Hi, I'm Hamzah. A software engineer.</h1>

          <div id='about-section' className="row justify-content-start">
            <AboutMe/>
          </div>

          <div id='project-section' className="row justify-content-start">
            <Tiles/>
          </div>

          <div id='contact-section' className="row justify-content-start">
            <ContactMe/>
          </div>

          <div id='footer' className="row justify-content-start"></div>

        </div>
        
        <div id='fixed-component' className="row justify-content-start"><AccessButtons/></div>
        
      </div>

  );
}

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
          <Route path="/project4" element={<Project4 />} />
          <Route path="/project5" element={<Project5 />} />
          <Route path="/project6" element={<Project6 />} />
          <Route path="/project7" element={<Project7 />} />
          <Route path="/project8" element={<Project8 />} />
        </Routes>
      </div>
    </Router>

  );
}
export default App;