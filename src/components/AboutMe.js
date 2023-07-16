import '../styles/AboutMe.css'
import 'bootstrap/dist/css/bootstrap.css';
import MeEdited from '../images/Me_Edited.jpg'

function AboutMe() {
    return(

                    <div className="about-me-style">

                        <img src={MeEdited} alt='Me' className='me-edited-style'/>

                        <div className='row justify-content-center'>

                            <div className='text-area-style'>

                                <h3 className='h3-style'>I create comfortable software experiences.</h3>

                                <p1 className='p1-style'>As a frontend developer, I follow the philosophy that form follows function.</p1>

                                <br/>
                                
                                <p1 className='p1-style'>I take pride in crafting intuitive interfaces & writing clean code, for user-centric software.</p1>
                                
                                <br/>
                                
                                <p1 className='p1-style'>I value readability, robustness, rigour, reliability, reusability, low coupling & high cohesion.</p1>           
                                
                                <br/>
                                
                                <p1 className='p1-style'>I value structure, simplicity, consistency, a smart use of space & a careful use of colour.</p1>

                            </div>

                        </div>

                    </div>

    );
}

export default AboutMe;