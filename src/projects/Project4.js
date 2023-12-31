import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../projects/Projects.css';
import Socials from '../homepage/Socials.js';
import Project4_Image1 from '../projects/project-images/Project4_Image1.png';
import Project4_Image2 from '../projects/project-images/Project4_Image2.png';
import Project4_Image3 from '../projects/project-images/Project4_Image3.png';
import Project4_Image4 from '../projects/project-images/Project4_Image4.png';
import Project4_Image5 from '../projects/project-images/Project4_Image5.png';
import Project4_Image6 from '../projects/project-images/Project4_Image6.png';
import Project4_Image7 from '../projects/project-images/Project4_Image7.png';
import Project4_Image8 from '../projects/project-images/Project4_Image8.png';
import Project4_Image9 from '../projects/project-images/Project4_Image9.png';
import Project4_Image10 from '../projects/project-images/Project4_Image10.png';
import Project4_Image11 from '../projects/project-images/Project4_Image11.png';
import Project4_Image12 from '../projects/project-images/Project4_Image12.png';
import Project4_Image13 from '../projects/project-images/Project4_Image13.png';
import Project4_Image14 from '../projects/project-images/Project4_Image14.png';
import Project4_Image15 from '../projects/project-images/Project4_Image15.png';
import Project4_Image16 from '../projects/project-images/Project4_Image16.png';
import Project4_Image17 from '../projects/project-images/Project4_Image17.png';
import Project4_Image18 from '../projects/project-images/Project4_Image18.png';
import Project4_Image19 from '../projects/project-images/Project4_Image19.png';
import Project4_Image20 from '../projects/project-images/Project4_Image20.png';
import Project4_Image21 from '../projects/project-images/Project4_Image21.png';
import Project4_Image22 from '../projects/project-images/Project4_Image22.png';
import Project4_Image23 from '../projects/project-images/Project4_Image23.png';
import Project4_Image24 from '../projects/project-images/Project4_Image24.png';
import Project4_Image25 from '../projects/project-images/Project4_Image25.png';
import Project4_Image26 from '../projects/project-images/Project4_Image26.png';

function Project4() {
  return (
    <div className="fluid-container">

      <div className='socials-div' style={{zIndex:'999'}}>
        <Socials/>
      </div>

      <div className='content-div'>

      <nav>
          <Link to="/#project-section" style={{textDecoration:'none'}}>
            <h2>&lt; Network Troubleshooting</h2>
            <br/>
          </Link>
        </nav>

        <div className='project-paragraphs'>
          <p>
          In this project, I demonstrated my abilities in network management and troubleshooting by setting up and testing a simple network environment. I used various tools such as Terminal commands 'ifconfig', 'netstat', and 'ping', along with packet-sniffing software like Wireshark, to verify the correct configuration and functionality of the network. This allowed me to showcase my understanding of network fundamentals and my ability to ensure smooth communication between devices in a distributed system.
          </p>

          <p>
          The project also involved identifying and addressing issues in an updated client-server application called 'cafe'. Through careful analysis of packet exchanges using Wireshark and protocol tables, I uncovered five distinct problems. These ranged from incorrect menu item responses to issues with credit balances, quantities, and item costs. By isolating the problems and tracing them back to the client and server, I showcased my troubleshooting skills and highlighted the importance of thorough testing and verification in software updates.
          </p>

          <p>
          The technical design challenges of the project lay in ensuring seamless communication across subnets and devices, as well as pinpointing the root causes of issues in the updated application. By addressing these challenges, I demonstrated my ability to diagnose and resolve network-related problems effectively. This project underscores the significance of meticulous testing, accurate protocol analysis, and a systematic approach to troubleshooting in maintaining reliable network systems and distributed applications.
          </p>
        </div>

        <div className='project-images'>
          <img className='individual-image' src={Project4_Image1} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image2} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image3} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image4} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image5} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image6} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image7} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image8} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image9} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image10} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image11} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image12} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image13} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image14} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image15} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image16} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image17} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image18} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image19} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image20} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image21} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image22} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image23} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image24} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image25} alt='' loading="lazy"></img>
          <img className='individual-image' src={Project4_Image26} alt='' loading="lazy"></img>
        </div>
      
      </div>

    </div>
  );
}

export default Project4;