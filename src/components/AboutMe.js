import '../styles/AboutMe.css'
import 'bootstrap/dist/css/bootstrap.css';
import MeEdited from '../images/Me_Edited.jpg'
import WavesVideo from '../images/Waves_Video.mp4';
import MyName from '../images/My_Name.png';

function AboutMe() {
    return(

        <div id='about-me' className='position-relative'>
                    
            <video id='background-video' className="embed-responsive embed-responsive-16by9" autoPlay muted loop><source src={WavesVideo} alt="Waves" type="video/mp4"/></video>
            <div id='my-name' className="position-absolute top-50 start-50 translate-middle"><img src={MyName} alt="My name" className="img-fluid"/></div>
            
            <div id='text-area' className="position-absolute top-50 start-50 translate-middle">
                <img id='me-edited' className='img-fluid' src={MeEdited} alt='Me'/>
                <h3 id='about-h3'>Junior Software Engineer</h3>
                <p1 id='about-p1'>🎓 Computer Science graduate</p1><br/>
                <p1 id='about-p1'>⚽ Manchester United supporter</p1><br/>
                <p1 id='about-p1'>🎮 FIFA, Call of Duty & Forza gamer</p1><br/>
            </div>

        </div>

    );
}
export default AboutMe;