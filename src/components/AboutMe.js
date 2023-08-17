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

function AboutMe() {
    return(
        <div className='row'>
                        
            <div id='about-div'>
                <p>
                    I'm a recent software engineer graduate with a strong interest in frontend development.
                    I take pride in creating software that is very simple but equally attractive and effective.
                    <br/>
                    I enjoy the challenge of turning complex problems into elegant, user-centric software.
                    I'm looking for opportunities that allow me to learn new skills and expand my horizons.
                </p>
                <img src={CSS_Logo} alt='CSS logo' className='skill-logo'/>
                <img src={HTML_Logo} alt='HTML logo' className='skill-logo'/>
                <img src={Javascript_Logo} alt='Javascript logo' className='skill-logo'/>
                <img src={Java_Logo} alt='Java logo' className='skill-logo'/>
                <img src={React_Logo} alt='React logo' className='skill-logo'/>
            </div>

            <div id='about-div'>
                <p>
                    Away from work, I love football: playing 5-a-side, watching Man United and playing FIFA.
                    I often enjoy PS5 multiplayer games with friends, to satisfy my need for competitive fun.
                    <br/>
                    I also go for long walks and hit the gym regularly, as to ensure I remain fit and healthy.
                    And to stay up to date with tech, I spend time watching channels like MKBHD and Fireship.
                </p>
                <img src={headphones} alt='Headphones icon' className='skill-logo'/>
                <img src={cardio} alt='Cardio icon' className='skill-logo'/>
                <img src={football} alt='Football icon' className='skill-logo'/>
                <img src={gaming} alt='Gaming icon' className='skill-logo'/>
            </div>

            <div id='about-div'>
                <p>
                    Also, whether I'm working or playing, I like to have a few songs playing in the background...
                </p>
                <iframe id='spotify-player' src="https://open.spotify.com/embed/playlist/1Y9gUnk8OPtkAlDX4qKb5Y?utm_source=generator&theme=0" title='Spotify player' frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

        </div>
    );
}
export default AboutMe;