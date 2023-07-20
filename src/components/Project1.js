import '../styles/Project1.css'
import 'bootstrap/dist/css/bootstrap.css';
import MeEdited from '../images/Me_Edited.jpg'
import MyName from '../images/My_Name.png';

function Project1() {
    return(

        <div id='project-1' className='position-relative'>
            <div id='project-name-1' className="position-absolute top-50 start-50 translate-middle"><img src={MyName} alt="My name" className="img-fluid"/></div>
            
            <div id='text-area-1' className="position-absolute top-50 start-50 translate-middle">
                <img id='image-1' className='img-fluid' src={MeEdited} alt='Me'/>
                <h3 id='about-h3-1'>Junior Software Engineer</h3>
                <p1 id='about-p1-1'>🎓 Computer Science graduate</p1><br/>
                <p1 id='about-p1-1'>⚽ Manchester United supporter</p1><br/>
                <p1 id='about-p1-1'>🎮 FIFA, Call of Duty & Forza gamer</p1><br/>
            </div>
        </div>

    );
}
export default Project1;