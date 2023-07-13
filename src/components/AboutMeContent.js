import '../styles/AboutMeContent.css';
import MeEdited from '../images/Me_Edited.jpg';

function AboutMeContent() {

    return (

        <div className='AboutMeContent'>

            <img src={MeEdited} alt='MeEdited' className='Me-Edited'/>

            <h3 className='About-H3'>My aim is to provide end-users with a delightfully impactful yet seamlessly comfortable experience.</h3>
            
            <p1 className='About-P1'>
                As a frontend developer, I follow the philosophy that form follows function.
                <br/>
                I take pride in crafting intuitive interfaces, writing clean & maintainable code, for user-centric software.
                <br/>
                In crafting interfaces, I value usability, structure, simplicity, consistency, a smart use of space & a careful use of colour.
                <br/>
                In writing code, I prioritise readability, robustness & rigour, reliability & dependability, reusability, low coupling & high cohesion.
                <br/>
            </p1>

        </div>

    );

}

export default AboutMeContent;