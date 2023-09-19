import React, {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import emailjs from "emailjs-com";

function Section4() {

    const form = useRef()

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

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='user_name' required />

                <label>Email</label>
                <input type='email' name='user_email' required />

                <label>Message</label>
                <textarea name='message' required/>
                <input type='submit' value={Send} />
            </form>

        </div>
    );
}
export default Section4;