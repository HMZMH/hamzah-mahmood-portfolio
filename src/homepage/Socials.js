import React from 'react';
import '../homepage/Socials.css';
import 'bootstrap/dist/css/bootstrap.css';
import profile from '../images/profile.png';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';

function Socials() {
  return(
      <div id='socials-button'>

        <img id='logos' src={profile} alt='My logo' style={{padding:'0'}}/>

        <div id='logos-tray'>

          <a href='https://github.com/HMZMH' target="_blank" rel="noreferrer">
            <img id='logos' src={logo1} alt='GitHub logo'/>
          </a>

          <a href="mailto:hmzmh2020@gmail.com" target="_blank" rel="noreferrer">
            <img id='logos' src={logo2} alt='Gmail logo'/>
          </a>

          <a href='https://www.instagram.com/hmzmh20/' target="_blank" rel="noreferrer">
            <img id='logos' src={logo3} alt='Instagram logo'/>
          </a>
          
          <a href='https://www.linkedin.com/in/hamzah-mahmood-20b777262/' target="_blank" rel="noreferrer">
            <img id='logos' src={logo4} alt='LinkedIn logo'/>
          </a>
          
        </div>
  
      </div>
  );
}
export default Socials;