import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButton from './components/SocialsButton.js';
import AccessButtons from './components/AccessButtons.js';
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
  return(
    <div>

      <div className='fixed-component'>
        <SocialsButton/>
      </div>

      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.5} style={{marginLeft:'10vw'}}>
          <h1 style={{ fontSize: "75px", marginTop: "45vh" }}>
            Hi, I'm Hamzah. A software engineer.
          </h1>
        </ParallaxLayer>

        <ParallaxLayer offset={0.99} speed={1.0} style={{marginLeft:'10vw'}}>
          <h1 className='h1-sections'>About me</h1>
          <AboutMe/>
        </ParallaxLayer>

        <ParallaxLayer offset={1.01} speed={1.5} style={{marginLeft:'10vw', marginTop:'7.5vh'}}>
          <h1 className='h1-sections'>My projects</h1>
          <MyProjects/>
        </ParallaxLayer>
      </Parallax>

      <div style={{height:'94vh'}}></div>

      <div className='fixed-component'><AccessButtons/></div>

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