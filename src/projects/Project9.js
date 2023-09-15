import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';

function Project9() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

      <nav>
          <Link to="/#project-section" style={{textDecoration:'none'}}>
            <h2>&lt; Project Deleted</h2>
            <br/>
          </Link>
        </nav>

        <p>New one coming soon</p>
      
      </div>

    </div>
  );
}

export default Project9;