import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../homepage/Section3.css';
import vector0 from '../images/vector0.png';
import vector9 from '../images/vector9.png';

function Section3() {
    return(
        <div className="row">

            <div class="col-md-12">

            </div>
                
                <nav>

                    <h2>And some personal projects...</h2>
                    <br/>

                    <Link to="/project9">
                        <div className='tile'>
                            <h5>Music Dashboard</h5>
                            <p>Personal Project</p>
                            <br/>
                            <img className='tile-img' src={vector9} alt='Web app vector'/>
                        </div>
                    </Link>

                    <div className='tile' style={{opacity:'50%'}}>
                        <h5>Under Construction!</h5>
                        <p style={{color:'black'}}>Coming Soon...</p>
                        <br/>
                        <img className='tile-img' src={vector0} alt='Web app vector'/>
                    </div>

                </nav>

        </div>
    );
}

export default Section3;