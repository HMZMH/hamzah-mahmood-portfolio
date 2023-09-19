import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from "emailjs-com";
import "./Section4.css";

function Section4() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_scalqij",
            "template_cj4hgia",
            form.current,
            "7J_sgGNNoTak2osoc"
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );
    };

    return(
        <div className="row">

            <h2>Like what you see?</h2>

            <h3>Get in touch!</h3>

            <div style={{minWidth:'15vw'}}>

            <form ref={form} onSubmit={sendEmail}>

                <br/>
                <label>Name</label>
                <br/>
                <input type='text' name='user_name' required />
                <br/><br/>

                <label>Email</label>
                <br/>
                <input type='email' name='user_email' required />
                <br/><br/>

                <label>Message</label>
                <br/>
                <textarea name='message' required/>
                
                <br/><br/>
                <input type='submit' value="Send" id='send-button'/>
            </form>

            </div>

        </div>
    );
}
export default Section4;