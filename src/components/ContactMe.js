import React from "react";
import '../styles/ContactMe.css'

function ContactMe() {
    return(
        <div className='row justify-content-start'>

            <h1 className='h1-sections'>Contact Me</h1>

            <div className="row justify-content-start">

                <label className="form-labels">Name</label>
                    <input className='input-field' type="text"></input>

                <label className="form-labels">Subject</label>
                    <input className='input-field' type="text"></input>

                <label className="form-labels">Message</label>
                    <input className='input-field' type="text" style={{minHeight:'150px', minWidth:'900px'}}></input>

            </div>

            <div style={{marginInlineStart:'4.4vw', marginTop:'2vh'}}>
                <button id="send-button">Send</button>
            </div>
        
        </div>
    );
}

export default ContactMe;