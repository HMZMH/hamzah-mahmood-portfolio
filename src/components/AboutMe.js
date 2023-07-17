import '../styles/AboutMe.css'
import 'bootstrap/dist/css/bootstrap.css';
import MeEdited from '../images/Me_Edited.jpg'
import WavesVideo from '../images/Waves_Video.mp4';
import MyName from '../images/My_Name.png';

function AboutMe() {
    return(

        <div>

            <div id='background-images' className="position-absolute top-50 start-50 translate-middle">
                <div className='position-relative'>
                    <video id='background-video' className="embed-responsive embed-responsive-16by9" autoPlay muted loop><source src={WavesVideo} alt="Waves" type="video/mp4"/></video>
                    <div id='my-name' className="position-absolute top-50 start-50 translate-middle"><img src={MyName} alt="My name" className="img-fluid" /></div>
                    
                    <div id='text-area' className="position-absolute top-50 start-50 translate-middle">
                        <img id='me-edited' className='img-fluid' src={MeEdited} alt='Me'/>
                        <h3 id='about-h3'>Software Developer</h3><br/>
                        <p1 id='about-p1'>My main aim will always remain the same: to create comfortable software experiences.</p1><br/>
                        <p1 id='about-p1'>I take pride in crafting intuitive interfaces & writing clean code, for user-centric software.</p1><br/>
                        <p1 id='about-p1'>I value readability, robustness, rigour, reliability, reusability, low coupling & high cohesion.</p1><br/>
                        <p1 id='about-p1'>I value structure, simplicity, consistency, a smart use of space & a careful use of colour.</p1>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default AboutMe;