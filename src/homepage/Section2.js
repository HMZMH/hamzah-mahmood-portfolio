import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../homepage/Section2.css';
import vector1 from '../images/vector1.png';
import vector2 from '../images/vector2.png';
import vector3 from '../images/vector3.png';
import vector4 from '../images/vector4.png';
import vector5 from '../images/vector5.png';
import vector6 from '../images/vector6.png';
import vector7 from '../images/vector7.png';
import vector8 from '../images/vector8.png';

function Section2() {
    return(
        <div className="fluid-container">
                
                <nav>

                    <h2>Some of my work...</h2>

                    <Link to="/project1">
                        <div className='tile'>
                            <h5>Web App Development</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector1} alt='Web app vector'/>
                        </div>
                    </Link>

                    <Link to="/project2">
                        <div className='tile'>
                            <h5>Software System Design</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector2} alt='System design vector'/>
                        </div>
                    </Link>

                    <Link to="/project3">
                        <div className='tile'>
                            <h5>UI Usability Engineering</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector3} alt='Usability vector'/>
                        </div>
                    </Link>
                    
                    <Link to="/project4">
                        <div className='tile'>
                            <h5>Network Troubleshooting</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector4} alt='Network vector'/>
                        </div>
                    </Link>
                    
                    <Link  to="/project5">
                        <div className='tile'>
                            <h5>System Metrics Analysis</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector5} alt='System analysis vector'/>
                        </div>
                    </Link>

                    <Link to="/project6">
                        <div className='tile'>
                            <h5>HCI Research Analysis</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector6} alt='Research vector'/>
                        </div>
                    </Link>
                    
                    <Link to="/project7">
                        <div className='tile'>
                            <h5>Mobile App Design</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector7} alt='Interface design vector'/>
                        </div>
                    </Link>
                    
                    <Link to="/project8">
                        <div className='tile'>
                            <h5>Mobile App Development</h5>
                            <p>University Project</p>
                            <img className='tile-img' src={vector8} alt='Mobile app vector'/>
                        </div>
                    </Link>
                </nav>

        </div>
    );
}

export default Section2;