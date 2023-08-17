import '../styles/SocialsButton.css';
import 'bootstrap/dist/css/bootstrap.css';
import profilepicture from '../images/Profile_Picture.png';
import githublogo from '../images/Github_Logo.png';
import gmaillogo from '../images/Gmail_Logo.png';
import instagramlogo from '../images/Instagram_Logo.png';
import linkedinlogo from '../images/Linkedin_Logo.png';

function SocialsButton() {
  return(
      <div id='socials-button'>

        <img id='logos' src={profilepicture} alt='My logo'/>

        <div id='logos-tray'>
          <a href='https://github.com/HMZMH' target="_blank" rel="noreferrer">
            <img id='logos' src={githublogo} alt='GitHub logo'/>
          </a>
          <br/>

          <a href="mailto:hmzmh2020@gmail.com" target="_blank" rel="noreferrer">
            <img id='logos' src={gmaillogo} alt='Gmail logo'/>
            </a>
          <br/>

          <a href='https://www.instagram.com/hmzmh20/' target="_blank" rel="noreferrer">
            <img id='logos' src={instagramlogo} alt='Instagram logo'/>
            </a>
          <br/>
          
          <a href='https://www.linkedin.com/in/hamzah-mahmood-20b777262/' target="_blank" rel="noreferrer">
            <img id='logos' src={linkedinlogo} alt='LinkedIn logo'/>
          </a>
        </div>
  
      </div>
  );
}
export default SocialsButton;