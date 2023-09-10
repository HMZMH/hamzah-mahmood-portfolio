import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';

function Project9() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

      <nav>
          <Link to="/#project-section" style={{textDecoration:'none'}}>
            <h2>&lt; Chat Web App</h2>
            <br/>
          </Link>
        </nav>

        <div className='project-paragraphs'>
              
          <h3>Project Overview</h3>
          <p>
          The 'Ball Talk' web app is a simple and lightweight chat application designed for football enthusiasts. It allows users to engage in discussions across different chat rooms, including General Discussion, Premier League, Champions League, FPL, and EAFC. This project showcases my expertise in web development, emphasizing real-time chat functionality and user authentication through Google Sign-In.
          </p>

          <h3>Features</h3>

          <ul>
              <li>Google Sign-In: Users can easily sign in using their Google accounts to start chatting.</li>
              <li>Chat Rooms: Join various chat rooms dedicated to football topics like the Premier League and Champions League.</li>
              <li>Real-Time Messaging: Engage in real-time conversations with other users within each chat room.</li>
              <li>Message Sending: Send text messages to share thoughts and opinions with fellow football fans.</li>
              <li>Upcoming Features: Future enhancements will include the ability to send photos and delete your own sent messages.</li>
          </ul>

          <h3>Technologies Used</h3>
          <ul>
              <li>Frontend: React, Firebase (for real-time database)</li>
              <li>Authentication: Google Sign-In</li>
              <li>Styling: CSS</li>
          </ul>

          <h3>Project Structure</h3>

          <p>         
          The project is divided into a frontend built with React, which handles the user interface and real-time messaging, and Firebase, which manages the backend, including the real-time database for chat messages.
          </p>

          <p>
          <h3>Deployment</h3>
          The Football Chat App is currently in development and will be deployed online in the near future. Stay tuned for updates!
          <br/>If you have any questions or would like to discuss this project further, please feel free to contact me.

          <br/><br/>
          <Link to="https://github.com/HMZMH/hamzah-mahmood-chat-app">View the project on GitHub</Link>
          </p>

      </div>
      
      </div>

    </div>
  );
}

export default Project9;