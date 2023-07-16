import '../styles/BackgroundImages.css'
import 'bootstrap/dist/css/bootstrap.css';
import WavesVideo from '../images/Waves_Video.mp4';
import MyName from '../images/My_Name.png';

function BackgroundImages() {
  return (

    <div className='background-images-style'>

        <div>
          
          <img src={MyName} alt="My name" class="my-name-style"/>
        
        </div>

        <video className='background-video-style' autoPlay muted loop>

          <source src={WavesVideo} alt="Waves" type="video/mp4"/>
          
        </video>
    
    </div>

  );

}

export default BackgroundImages;