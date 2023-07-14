import '../styles/AboutMe.css'
import MeEdited from '../images/Me_Edited.jpg'

function AboutMe() {

    return(

        <div class="d-flex justify-content-center">

            <img src={MeEdited} className='Me-Edited'/>

            <div className='Text-Area'>

                <h3 className='About-H3'>My aim is to provide end-users with a seamlessly comfortable experience.</h3>

                <p1 className='About-P1'>As a frontend developer, I follow the philosophy that form follows function.</p1>
                <br/>

                <p1 className='About-P1'>I take pride in crafting intuitive interfaces, writing clean & maintainable code, for user-centric software.</p1>
                <br/>

                <p1 className='About-P1'>In crafting interfaces, I value usability, structure, simplicity, consistency, a smart use of space & a careful use of colour.</p1>
                <br/>

                <p1 className='About-P1'>In writing code, I prioritise readability, robustness & rigour, reliability & dependability, reusability, low coupling & high cohesion.</p1>           
                <br/>
                
            </div>

        </div>

    );

}

export default AboutMe;