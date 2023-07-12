import '../styles/AboutMeContent.css';
import MeEdited from '../images/Me_Edited.jpg';

function AboutMeContent() {

    return (

        <div className='AboutMeContent'>

            <img src={MeEdited} alt='MeEdited' className='Me-Edited'/>

            <h3>I enjoy writing clean code and creating stylish sites.</h3>

        </div>

    );

}

export default AboutMeContent;