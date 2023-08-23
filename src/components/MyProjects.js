import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/MyProjects.css';
import System_Design_Icon from '../images/system-design-icon.png';
import Interface_Design_Icon from '../images/interface-design-icon.png';
import Mobile_App_Icon from '../images/mobile-app-icon.png';
import Usability_Icon from '../images/Usability_Icon.png';
import Webapp_Icon from '../images/Webapp_Icon.png';
import Network_Icon from '../images/Network_Icon.png';
import Analysis_Icon from '../images/Analysis_Icon.png';
import Research_Icon from '../images/Research_Icon.png';

function MyProjects() {
    return(
        <div id='tiles-container' className="fluid-container">
                
                <nav>
                    <Link id='link' to="/project1">
                        <div className='tile'>
                            <h5>Web App<br/>Development</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Webapp_Icon} alt='Web app icon'/>
                        </div>
                    </Link>

                    <Link id='link' to="/project2">
                        <div className='tile'>
                            <h5>Software System<br/>Design</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={System_Design_Icon} alt='System design icon'/>
                        </div>
                    </Link>

                    <Link id='link' to="/project3">
                        <div className='tile'>
                            <h5>UI Usability<br/>Engineering</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Usability_Icon} alt='Usability icon'/>
                        </div>
                    </Link>
                    
                    <Link id='link' to="/project4">
                        <div className='tile'>
                            <h5>Network<br/>Troubleshooting</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Network_Icon} alt='Network icon'/>
                        </div>
                    </Link>
                </nav>

                <nav>
                    <Link id='link' to="/project5">
                        <div className='tile'>
                            <h5>System Metrics<br/>Analysis</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Analysis_Icon} alt='System analysis icon'/>
                        </div>
                    </Link>

                    <Link id='link' to="/project6">
                        <div className='tile'>
                            <h5>HCI Research<br/>Analysis</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Research_Icon} alt='Research icon'/>
                        </div>
                    </Link>
                    
                    <Link id='link' to="/project7">
                        <div className='tile'>
                            <h5>Mobile App<br/>Design</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Interface_Design_Icon} alt='Interface design icon'/>
                        </div>
                    </Link>
                    
                    <Link id='link' to="/project8">
                        <div className='tile'>
                            <h5>Mobile App<br/>Development</h5>
                            <p className='tile-text'>University Project</p>
                            <img className='tile-img' src={Mobile_App_Icon} alt='Mobile app icon'/>
                        </div>
                    </Link>
                </nav>

        </div>
    );
}

export default MyProjects;