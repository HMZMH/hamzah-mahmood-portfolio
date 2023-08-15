import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButtons from './components/SocialsButtons.js';
import AccessButtons from './components/AccessButtons.js';
import CSS_Logo from './images/Css_Logo.png';
import HTML_Logo from './images/Html_Logo.png';
import Java_Logo from './images/Java_Logo.png';
import Javascript_Logo from './images/Javascript_Logo.png';
import React_Logo from './images/React_Logo.png';
import Tile1 from './components/Tile1.js';
import Tile2 from './components/Tile2.js';
import Tile3 from './components/Tile3.js';
import Tile4 from './components/Tile4.js';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';

function Home() {
  return(

    <div className="container-fluid">

        <div id='fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='content-component' className="row justify-content-start">

          <h1 style={{fontSize: "75px", marginTop: "45vh"}}>Hi, I'm Hamzah. A software engineer.</h1>

          <div id='about-section' className="row justify-content-start">

            <h1 className='h1-sections'>About me</h1>

            <p>
                I'm a fresh software engineer graduate with a passion for frontend development.
              <br/>I take pride in creating software that is very simple but equally attractive and effective.
              <br/>I enjoy the challenge of turning complex problems into elegant, user-centric software.
              <br/>I'm looking for opportunities that allow me to learn new skills and expand my horizons.
            </p>

            <div className='row justify-content-end'>
              <img src={CSS_Logo} alt='CSS logo' className='skill-logo'/>
              <img src={HTML_Logo} alt='HTML logo' className='skill-logo'/>
              <img src={Javascript_Logo} alt='Javascript logo' className='skill-logo'/>
              <img src={Java_Logo} alt='Java logo' className='skill-logo'/>
              <img src={React_Logo} alt='React logo' className='skill-logo'/>
            </div>

          </div>

          <div id='project-section' className="row justify-content-start">

            <h1 className='h1-sections'>My projects</h1>

            <Tile1/>
            <Tile2/>
            <Tile3/>
            <Tile4/>

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
        </Routes>
      </div>
    </Router>

  );
}
export default App;