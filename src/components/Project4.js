import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Project.css';
import SocialsButtons from '../components/SocialsButtons.js';
import AccessButtons from '../components/AccessButtons.js';

function Project4() {
  return (
    <div className="container-fluid">

        <div id='project-fixed-component' className="row justify-content-start">
          <SocialsButtons/>
        </div>

        <div id='project-content-component' className="row justify-content-start">

        <nav>
            <Link id='link' to="/">
              <h3>&lt; Home</h3>
            </Link>
          </nav>

          <h1 className='h1-sections'>Network Troubleshooting</h1>

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
        
        </div>

        <div id='project-fixed-component' className="row justify-content-start"><AccessButtons/></div>

    </div>
  );
}

export default Project4;