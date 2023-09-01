import React from 'react';
import '../styles/AboutMe.css';
import CSS_Logo from '../images/Css_Logo.png';
import HTML_Logo from '../images/Html_Logo.png';
import Java_Logo from '../images/Java_Logo.png';
import Javascript_Logo from '../images/Javascript_Logo.png';
import React_Logo from '../images/React_Logo.png';
import football from '../images/Football.png';
import gaming from '../images/Gaming.png';
import cardio from '../images/Cardio.png';
import headphones from '../images/Headphones.png';
import sleeping from '../images/sleeping.png';

function AboutMe() {
    return(
        <div className="fluid-container">
                        
            <div id='about-div'>

                <p className='about-paragraphs'>
                    I'm a recent computer science graduate who studied with an emphasis in software engineering.
                    What I enjoy about software engineering is the challenge of trying to solve complex problems with smart software solutions.
                    As a software engineer, I follow the belief that software should be simple, seamless, comfortably intuitive and easy on the eye.
                    I'm seeking opportunities that will expose me to new skills and that allow me to contribute to meaningful projects, as I look to forge a strong career in frontend development.
                </p>

                <div id='skill-div'>
                    <img src={CSS_Logo} alt='CSS logo' className='skill-logo'/>
                    <img src={HTML_Logo} alt='HTML logo' className='skill-logo'/>
                    <img src={Javascript_Logo} alt='Javascript logo' className='skill-logo'/>
                    <img src={Java_Logo} alt='Java logo' className='skill-logo'/>
                    <img src={React_Logo} alt='React logo' className='skill-logo'/>
                    <img src={headphones} alt='Headphones icon' className='skill-logo'/>
                    <img src={cardio} alt='Cardio icon' className='skill-logo'/>
                    <img src={football} alt='Football icon' className='skill-logo'/>
                    <img src={gaming} alt='Gaming icon' className='skill-logo'/>
                    <img src={sleeping} alt='Sleeping icon' className='skill-logo'/>
                    <br/>
                </div>

                <p className='about-paragraphs'>
                    <br/>
                    Away from work, I dedicate my free time to improving my health and learning.
                    I love to play football, go for long walks and hit the gym to stay fit.
                    I watch tech channels like MKBHD and Fireship, which I find very informative.
                    But sometimes I just like to relax, playing FIFA on my PS5 and listening to music...
                </p>

                <iframe id='spotify-player'  src="https://open.spotify.com/embed/playlist/1Y9gUnk8OPtkAlDX4qKb5Y?utm_source=generator&theme=0"
                title='Spotify player' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
                </iframe>
            
            </div>

        </div>
    );
}
export default AboutMe;