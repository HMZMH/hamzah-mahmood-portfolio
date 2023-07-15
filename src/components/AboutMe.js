import '../styles/AboutMe.css'
import MeEdited from '../images/Me_Edited.jpg'

function AboutMe() {
    return(

        <div class="d-flex justify-content-start">

            <div className='About-Me'>

                <img src={MeEdited} className='Me-Edited'/>

                <div className='Text-Area'>
                    <h3 className='About-H3'>I create comfortable software experiences.</h3>

                    <p1 className='About-P1'>As a frontend developer, I follow the philosophy that form follows function.</p1>
                    <br/>
                    <p1 className='About-P1'>I take pride in crafting intuitive interfaces, writing clean & maintainable code, for user-centric software.</p1>
                    <br/>
                    <p1 className='About-P1'>I value readability, robustness, rigour, reliability, dependability, reusability, low coupling & high cohesion.</p1>           
                    <br/>
                    <p1 className='About-P1'>I value usability, structure, simplicity, consistency, a smart use of space & a careful use of colour.</p1>
                    <br/>
                </div>
                
            </div>

        </div>

    );
}

export default AboutMe;