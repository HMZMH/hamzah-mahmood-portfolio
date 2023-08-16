import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Tile.css'
import 'bootstrap/dist/css/bootstrap.css';
import System_Design_Icon from '../images/system-design-icon.png';
import Interface_Design_Icon from '../images/interface-design-icon.png';
import Mobile_App_Icon from '../images/mobile-app-icon.png';
import Usability_Icon from '../images/Usability_Icon.png';
import Webapp_Icon from '../images/Webapp_Icon.png';
import Network_Icon from '../images/Network_Icon.png';
import Analysis_Icon from '../images/Analysis_Icon.png';
import Research_Icon from '../images/Research_Icon.png';

function Tiles() {
    return(

        <div className='row justify-content-center'>

            <h1 className='h1-sections'>My projects</h1>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project1">
                        <div>
                            <h4>Web App Development</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Webapp_Icon} alt='Web app icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project2">
                        <div>
                            <h4>Software System Design</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={System_Design_Icon} alt='System design icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project3">
                        <div>
                            <h4>UI Usability Engineering</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Usability_Icon} alt='Usability icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project4">
                        <div>
                            <h4>Network Troubleshooting</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Network_Icon} alt='Network icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project5">
                        <div>
                            <h4>System Metrics Analysis</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Analysis_Icon} alt='System analysis icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project6">
                        <div>
                            <h4>HCI Research Analysis</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Research_Icon} alt='Research icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project7">
                        <div>
                            <h4>Mobile App Design</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Interface_Design_Icon} alt='Interface design icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className='tile'>
                <nav>
                    <Link id='link' to="/project8">
                        <div>
                            <h4>Mobile App Development</h4>
                            <p>University Project</p>
                            <img className='tile-img' src={Mobile_App_Icon} alt='Mobile app icon'/>
                        </div>
                    </Link>
                </nav>
            </div>

        </div>

    );
}

export default Tiles;