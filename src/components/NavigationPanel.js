import '../styles/NavigationPanel.css';
import React from 'react';

function NavigationPanel() {

    return(

        <div className='Navigation-Panel'>

            <button className='Navigation-Buttons'>About me</button>
            <button className='Navigation-Buttons'>Education</button>
            <button className='Navigation-Buttons'>Projects</button>

        </div>

    );

}

export default NavigationPanel;