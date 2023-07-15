import '../styles/BackgroundImages.css'
import WavesVideo from '../images/Waves_Video.mp4';

function BackgroundImages() {
  return (

      <div class="d-flex justify-content-center">

        <div className='Title-Container'>
            <video className='Background-Video' autoPlay muted loop>
              <source src={WavesVideo} alt="Waves" type="video/mp4"/>
            </video>
        </div>

      </div>

    );
}

export default BackgroundImages;