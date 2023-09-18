import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';
import Project9_Image1 from "./project-images/Project9_Image1.png";
import Project9_Image2 from "./project-images/Project9_Image2.png";

function Project9() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

        <nav>
          <Link to="/#project-section" style={{ textDecoration: 'none' }}>
            <h2>&lt; Music Dashboard</h2>
            <br />
          </Link>
        </nav>

        <div className='project-paragraphs'>
          <p>
            In this frontend development project, I created a Music Dashboard to revolutionise how users experience their favourite music from multiple platforms. The project aimed to provide a unified and personalised hub for music enthusiasts, seamlessly integrating SoundCloud, Spotify, and YouTube content.
            The Music Dashboard simplifies the music discovery process. Users can effortlessly access their SoundCloud playlists, Spotify collections, and YouTube favourites in one central location. The project's technical challenges included integrating multiple APIs, ensuring responsive design across devices, and providing an intuitive user interface.
          </p>

          <p>
            To tackle these challenges, I implemented robust API integrations for SoundCloud, Spotify, and YouTube, enabling users to view and play their playlists and subscriptions without leaving the dashboard. The project prioritised responsive design principles, ensuring that the dashboard functions seamlessly on various screen sizes.
            The user interface was carefully crafted for an intuitive experience. Users can easily switch between music platforms, search for specific tracks or playlists, and enjoy their favourite tunes hassle-free. I also incorporated user-friendly features like URL validation and real-time playlist updates.
          </p>

          <p>
            The Music Dashboard project showcases my frontend development skills, including React.js, CSS styling, and API integration. It represents a solution that enhances the music listening experience by putting users in control of their music library across different platforms, all in one place.
          </p>
        </div>
        <br/>

        <div className='project-images'>
          <Link to='https://shimmering-daffodil-1511eb.netlify.app/' target="_blank" rel="noopener noreferrer">
            <img className='individual-image' src={Project9_Image1} alt='' loading="lazy"></img>
          </Link>

          <Link to='https://shimmering-daffodil-1511eb.netlify.app/' target="_blank" rel="noopener noreferrer">
            <img className='individual-image' src={Project9_Image2} alt='' loading="lazy"></img>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Project9;