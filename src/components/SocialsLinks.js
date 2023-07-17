import '../styles/SocialsLinks.css';
import 'bootstrap/dist/css/bootstrap.css';
import profilepicture from '../images/Profile_Picture.png';
import githublogo from '../images/Github_Logo.png';
import facebooklogo from '../images/Facebook_Logo.png';
import instagramlogo from '../images/Instagram_Logo.png';

function SocialLinks() {
  return(

      <div id='socials-links' className='img-fluid'>

        <button id='social-links-button'>
          <img id='profile-picture' src={profilepicture} alt='Profile logo'/>
        </button>

        <div id='logos-tray'>
          <a href='https://github.com/HMZMH' target="_blank" rel="noreferrer"><img id='logos' src={githublogo} alt='GitHub logo'/></a>
          <a href='https://www.facebook.com/profile.php?id=100092700780143' target="_blank" rel="noreferrer"><img id='logos' src={facebooklogo} alt='Facebook logo'/></a>
          <a href='https://www.instagram.com/hmzmh20/' target="_blank" rel="noreferrer"><img id='logos' src={instagramlogo} alt='Instagram logo'/></a>
        </div>
      
      </div>
  
  );
}
export default SocialLinks;