import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButton from './components/SocialsButton.js';
import AboutMe from './components/AboutMe.js';
import MyProjects from './components/MyProjects.js';
import Project1 from './components/Project1.js';
import Project2 from './components/Project2.js';
import Project3 from './components/Project3.js';
import Project4 from './components/Project4.js';
import Project5 from './components/Project5.js';
import Project6 from './components/Project6.js';
import Project7 from './components/Project7.js';
import Project8 from './components/Project8.js';


function Home() {

  return (
    <div className="fluid-container">

      <div className='socials-component' style={{ zIndex: '999' }}>
        <SocialsButton />
      </div>

      <div className='content-component'>

        <div style={{height:'45vh'}}></div>
        <h1 id='title-heading'>Hi, I'm Hamzah. <br />A software engineer.</h1>
        <div style={{height:'50vh'}}></div>

        <AboutMe/>
        <div style={{height:'50vh'}}></div>

        <MyProjects/>
        <div style={{height:'25vh'}}></div>

      </div>

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