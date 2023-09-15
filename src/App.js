import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Socials from './homepage/Socials.js';
import Section1 from './homepage/Section1.js';
import Section2 from './homepage/Section2.js';
import Section3 from './homepage/Section3.js';
import Project1 from './projects/Project1.js';
import Project2 from './projects/Project2.js';
import Project3 from './projects/Project3.js';
import Project4 from './projects/Project4.js';
import Project5 from './projects/Project5.js';
import Project6 from './projects/Project6.js';
import Project7 from './projects/Project7.js';
import Project8 from './projects/Project8.js';
import Project9 from './projects/Project9.js';

function Home() {

  return (
    <div className="fluid-container">

      <div className='socials-div' style={{ zIndex: '999' }}>
        <Socials />
      </div>

      <div className='content-div'>

        <div id='title-div'>
          <h1 style={{color:'white', marginTop:'25vh'}}>Hi, I'm Hamzah.</h1>
          <h1 style={{color:'cyan', marginBottom:'50vh'}}>A software engineer.</h1>
        </div>
        
        <section className='sections'>
          <Section1/>
        </section>

        <section className='sections'>
          <Section2/>
        </section>

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
          <Route path="/project9" element={<Project9 />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;