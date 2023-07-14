import '../styles/BackgroundImages.css'
import MyName from '../images/My_Name.png';
import WavesVideo from '../images/Waves_Video.mp4';

function BackgroundImages(){
    
    return(

      <div class="d-flex justify-content-center">
        
        <video className='Background-Video' autoPlay muted loop>

             <source src={WavesVideo} alt="Waves" type="video/mp4"/>

        </video>

        <div>
            
            <img src={MyName} alt="My name" class="img-fluid" style={{zIndex:'1'}}/>
        
        </div>

      </div>
    );

}

export default BackgroundImages;