import '../styles/SocialsLinks.css';
import 'bootstrap/dist/css/bootstrap.css';
import profilepicture from '../images/Profile_Picture.png';
import githublogo from '../images/Github_Logo.png';
import facebooklogo from '../images/Facebook_Logo.png';
import instagramlogo from '../images/Instagram_Logo.png';

function SocialLinks() {

  return(

      <div className='socials-links-style'>

        <button className='social-links-button-style'>
  
          <img src={profilepicture} alt='Profile logo' className='profile-picture-style'/>
  
        </button>

        <div className='logos-tray-style'>
  
          <a href='https://github.com/HMZMH' target="_blank" rel="noreferrer">
            
            <img src={githublogo} alt='GitHub logo' className='logos-style'/>
          
          </a>

          <a href='https://www.facebook.com/profile.php?id=100092700780143' target="_blank" rel="noreferrer">
            
            <img src={facebooklogo} alt='Facebook logo' className='logos-style'/>
          
          </a>

          <a href='https://www.instagram.com/hmzmh20/' target="_blank" rel="noreferrer">

            <img src={instagramlogo} alt='Instagram logo' className='logos-style'/>

          </a>
  
        </div>
      
      </div>
  
  );

}

export default SocialLinks;