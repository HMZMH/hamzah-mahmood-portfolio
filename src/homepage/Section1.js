import React from 'react';
import '../homepage/Section1.css';

function Section1() {
    return(
        <div className="fluid-container">

            <h2>ABOUT</h2>

            <p>
                I'm a recent computer science graduate who studied with an emphasis on software engineering.
                What I enjoy about software engineering is the challenge of trying to solve complex problems with smart software solutions.
                As a software engineer, I follow the belief that software should be simple, seamless, comfortably intuitive and easy on the eye.
                I'm seeking opportunities that will expose me to new skills and that allow me to contribute to meaningful projects, as I look to forge a strong career in frontend development.
            </p>

            <p>
                Away from work, I dedicate my free time to improving my health and learning.
                I love to play football, go for long walks and hit the gym to stay fit.
                I watch tech channels like MKBHD and Fireship, which I find very informative.
                But sometimes I just like to relax, playing FIFA on my PS5 and listening to music.
            </p>

            <iframe
                id='spotify-player'
                src="https://open.spotify.com/embed/playlist/1Y9gUnk8OPtkAlDX4qKb5Y?utm_source=generator&theme=0"
                title='Spotify player'
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            >
            </iframe>

        </div>
    );
}
export default Section1;