import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButtons from './components/SocialsButtons.js';
import AccessButtons from './components/AccessButtons.js';
import Tile1 from './components/Tile1.js';
import Tile2 from './components/Tile2.js';
import Tile3 from './components/Tile3.js';
import Tile4 from './components/Tile4.js';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Portrait_Photo from './images/Portrait_Photo.jpg';

function Home() {
  return(

    <div className="container-fluid">

        <div id='fixed-component' className="row justify-content-start"><SocialsButtons/></div>

        <div id='content-component' className="row justify-content-center">

          <div id='photo-box'>
            <img id='portrait-photo' src={Portrait_Photo} alt='Portrait'/>
          </div>

          <h1 style={{fontSize: "75px", textAlign: "left", marginInlineStart:'22vw', marginTop: "20vh"}}>Hi. I'm Hamzah. A software engineer.</h1>
          
          <Tile1/>
          <Tile2/>
          <Tile3/>
          <Tile4/>
        </div>

        <div></div>
        
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