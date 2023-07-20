import '../styles/Project2.css'
import 'bootstrap/dist/css/bootstrap.css';
import MeEdited from '../images/Me_Edited.jpg'
import MyName from '../images/My_Name.png';

function Project2() {
    return(

        <div id='project-2' className='position-relative'>
            <div id='project-name-2' className="position-absolute top-50 start-50 translate-middle"><img src={MyName} alt="My name" className="img-fluid"/></div>
            
            <div id='text-area-2' className="position-absolute top-50 start-50 translate-middle">
                <img id='image-2' className='img-fluid' src={MeEdited} alt='Me'/>
                <h3 id='about-h3-2'>Junior Software Engineer</h3>
                <p1 id='about-p1-2'>🎓 Computer Science graduate</p1><br/>
                <p1 id='about-p1-2'>⚽ Manchester United supporter</p1><br/>
                <p1 id='about-p1-2'>🎮 FIFA, Call of Duty & Forza gamer</p1><br/>
            </div>
        </div>

    );
}
export default Project2;