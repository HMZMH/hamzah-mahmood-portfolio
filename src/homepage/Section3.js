import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../homepage/Section3.css';
import vector1 from '../images/vector1.png';
import vector2 from '../images/vector2.png';
import vector3 from '../images/vector3.png';
import vector4 from '../images/vector4.png';
import vector5 from '../images/vector5.png';
import vector6 from '../images/vector6.png';
import vector7 from '../images/vector7.png';
import vector8 from '../images/vector8.png';

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
                            <h5>MERN Task Tracker App</h5>
                            <p>Personal Project (in development!)</p>
                            <br/>
                            <img className='tile-img' src={vector1} alt='Web app vector'/>
                        </div>
                    </Link>
                </nav>

        </div>
    );
}

export default Section3;