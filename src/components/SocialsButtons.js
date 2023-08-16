import '../styles/SocialsButtons.css';
import 'bootstrap/dist/css/bootstrap.css';
import profilepicture from '../images/Profile_Picture.png';
import githublogo from '../images/Github_Logo.png';
import gmaillogo from '../images/Gmail_Logo.png';
import instagramlogo from '../images/Instagram_Logo.png';
import linkedinlogo from '../images/Linkedin_Logo.png';

function SocialsButtons() {
  return(

      <div id='socials-buttons' className='img-fluid'>

        <img id='my-logo' src={profilepicture} alt='My logo'/>
        <div id='logos-tray'>
          <a href='https://github.com/HMZMH' target="_blank" rel="noreferrer"><img id='logos' src={githublogo} alt='GitHub logo'/></a>
          <a href="mailto:hmzmh2020@gmail.com" target="_blank" rel="noreferrer"><img id='logos' src={gmaillogo} alt='Gmail logo'/></a>
          <a href='https://www.instagram.com/hmzmh20/' target="_blank" rel="noreferrer"><img id='logos' src={instagramlogo} alt='Instagram logo'/></a>
          <a href='https://www.linkedin.com/in/hamzah-mahmood-20b777262/' target="_blank" rel="noreferrer"><img id='logos' src={linkedinlogo} alt='LinkedIn logo'/></a>
        </div>
      
      </div>
  
  );
}
export default SocialsButtons;