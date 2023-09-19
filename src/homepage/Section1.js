import React from 'react';
import '../homepage/Section1.css';

function Section1() {
    return(
        <div className="row">

            <h2>A bit about me...</h2>

            <div class="col-md-7" id='about-p'>
                    <p>
                    I graduated from Brunel University London in July 2023, earning an Upper Second-Class Honours (2:1) in Computer Science (Software Engineering).<br/>
                    <br/>
                        What I enjoy about software engineering is the challenge of trying to solve complex problems with smart software solutions.
                        As a software engineer, I follow the belief that software should be simple, seamless, comfortably intuitive and easy on the eye.
                        I'm seeking opportunities that will expose me to new skills and allow me to contribute to meaningful projects, as I look to forge a strong career in frontend development.
                    </p>

                    <p>
                        Away from work, I dedicate my free time to improving my health and learning.
                        I love to play football, go for long walks and regularly hit the gym for cardio.
                        I watch tech channels like MKBHD and Fireship, which I find very informative.
                        But sometimes I just like to relax, playing EAFC on my PlayStation 5 and listening to music.
                    </p>
            </div>

            <div class="col-md-1">

            </div>

            <div class="col-md-3" id='spotify-div'>
                <iframe
                    id='spotify-player'
                    src="https://open.spotify.com/embed/playlist/1Y9gUnk8OPtkAlDX4qKb5Y?utm_source=generator"
                    title='Spotify player'
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                >
                </iframe>
            </div>

        </div>
    );
}
export default Section1;