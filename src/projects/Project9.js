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
            <h6>Back</h6>
            <br/>
          </Link>
        </nav>

        <h2>Task Tracker Web App (still in development!)</h2>
        <br/>

        <div className='project-paragraphs'>
            
            <h3>Project Overview</h3>
            <p>
            The Task Tracker Web App is a full-stack MERN project that I designed to help users manage their tasks and to-do items efficiently. This project demonstrates my skills in web development, including user authentication, database management, and building a responsive user interface.</p>

            <h3>Features</h3>

            <ul>
                <li>User Registration and Authentication: Users can securely register and log in to access their tasks.</li>
                <li>Task Management: Create, read, update, and delete tasks effortlessly.</li>
                <li>Task Categories: Organize tasks into different categories for better organization.</li>
                <li>Task Status: Keep track of task progress with status updates.</li>
                <li>User Dashboard: View tasks categorized by status and categories on a user-friendly dashboard.</li>
                <li>User Profile: Customize your profile information to make the app your own.</li>
                <li>Responsive Design: Enjoy a seamless experience on both desktop and mobile devices.</li>
                <li>Pagination: Easily navigate through tasks with pagination.</li>
                <li>Sorting and Filtering: Sort and filter tasks based on various criteria.</li>
                <li>Search Functionality: Quickly find tasks using the search feature.</li>
            </ul>

            <h3>Technologies Used</h3>
            <ul>
                <li>Frontend: React, HTML, CSS, JavaScript</li>
                <li>Backend: Node.js, Express.js, MongoDB</li>
                <li>Authentication: JSON Web Tokens (JWT)</li>
                <li>Styling: Bootstrap (or Material-UI)</li>
                <li>HTTP Requests: Axios (or fetch API)</li>
            </ul>
            
            <h3>Project Structure</h3>

            <p>         
            The project is divided into two main components:

            <ul>
                <li>Backend: Built using Node.js and Express.js, responsible for handling API requests, user authentication, and database interactions.</li>
                <li>Frontend: Developed using React, responsible for creating the user interface and user interactions.</li>
            </ul>
            </p>

            <p>
            <h3>Deployment</h3>
            The Task Tracker Web App is deployed and accessible online. You can visit the live app by clicking the link below:

            <br/><br/>Task Tracker Web App

            <br/><br/>You can explore the source code of this project on GitHub:

            <br/><br/>GitHub Repository

            <br/><br/>Screenshot 1
            <br/>Image Description: A screenshot showing the task creation form.

            <br/><br/>Screenshot 2
            <br/>Image Description: A screenshot displaying a list of tasks with categories and status.

            <br/><br/>If you have any questions or would like to discuss this project further, please don't hesitate to contact me.
            </p>
            
        </div>
      
      </div>

    </div>
  );
}

export default Project9;