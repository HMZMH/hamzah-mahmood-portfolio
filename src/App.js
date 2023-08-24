import React, {useState, useEffect} from 'react';
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
import Clouds from './images/Clouds.png';
import Lake from './images/Lake.jpg';

function Home() {

  const [layer1Offset, setLayer1Offset] = useState(0.1);
  const [layer2Offset, setLayer2Offset] = useState(0.05);
  const [layer3Offset, setLayer3Offset] = useState(0.999);
  const [layer4Offset, setLayer4Offset] = useState(1.15);

  const updateOffsets = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 800) {
      setLayer1Offset(0.1);
      setLayer2Offset(0.05);
      setLayer3Offset(0.999);
      setLayer4Offset(1.09);
    }

    if (screenWidth <= 400) {
      setLayer4Offset(1.20);
    }
  };

  useEffect(() => {
    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    return () => {
      window.removeEventListener('resize', updateOffsets);
    };
  }, []);

  return(
    <div className="fluid-container">

      <div className='fixed-component'>
        <SocialsButton/>
      </div>

      <Parallax id='homepage-container' pages={2}>

      <ParallaxLayer offset={layer1Offset} factor={0.5} speed={0.3} style={{marginLeft:'10vw'}}>
          <img id='home-image1' src={Clouds} alt='Clouds' style={{opacity:'60%'}}></img>
          <img id='home-image1' src={Clouds} alt='Clouds'></img>
        </ParallaxLayer>
        
        <ParallaxLayer offset={layer2Offset} factor={0.5} speed={0.8} style={{marginLeft:'10vw'}}>
          <h1 id='title-heading'>
            Hi, I'm Hamzah. <br/>A software engineer.
          </h1>
          <div id='main-title-heading' style={{ position: 'absolute'}}></div>
        </ParallaxLayer>

        <ParallaxLayer offset={layer3Offset} factor={0.5} speed={1} style={{marginLeft:'10vw'}}>
          <h1 className='h1-sections'>About me</h1>
          <div id='about-me-heading' style={{ position: 'absolute', top:'-20vh'}}></div>
          <AboutMe/>
        </ParallaxLayer>

        <ParallaxLayer offset={layer4Offset} factor={0.5} speed={0.6} style={{marginLeft:'10vw'}}>
          <h1 className='h1-sections'>My projects</h1>
          <div id='my-projects-heading' style={{ position: 'absolute'}}></div>
          <MyProjects/>
        </ParallaxLayer>

        <ParallaxLayer style={{zIndex:'-999'}}>
          <img id='home-image2' src={Lake} alt='Lake'></img>
        </ParallaxLayer>

      </Parallax>

      <div className='fixed-component'>
        <a className="scroll-button" href='#about-me-heading' style={{marginBottom:'10vh'}}></a>
        <a className="scroll-button" href='#my-projects-heading' style={{marginBottom:'7vh'}}></a>
        <a className="scroll-to-top-button" href='#main-title-heading' style={{textDecoration:'none'}}>^</a>
      </div>
      
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