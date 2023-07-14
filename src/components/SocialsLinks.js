import '../styles/SocialsLinks.css';
import profilepicture from '../images/Profile_Picture.png';
import githublogo from '../images/Github_Logo.png';
import facebooklogo from '../images/Facebook_Logo.png';
import instagramlogo from '../images/Instagram_Logo.png';

function AboutMeContent() {

  return(
  
  <div className='Socials-Links'>

        <button className='Profile-Button'>
  
          <img src={profilepicture} className='Profile-Picture'/>
  
        </button>

        <div className='Socials-Tray'>
  
          <a href='https://github.com/HMZMH' target="_blank"> <img src={githublogo} className='Socials-Logos'/> </a>
          <a href='https://www.facebook.com/profile.php?id=100092700780143' target="_blank"><img src={facebooklogo} className='Socials-Logos'/> </a>
          <a href='https://www.instagram.com/hmzmh20/' target="_blank"><img src={instagramlogo} className='Socials-Logos'/> </a>
  
        </div>

    </div>
  
  );

}

export default AboutMeContent;