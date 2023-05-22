import React from 'react';
import emailjs from '@emailjs/browser';
import '../styles/mailer.css'
import ECLAIRButton from './ECLAIRButton';
import { useState, useRef } from 'react';
/*
    THINGS TO DO:
        * Make fields required
        * Make the fields disappear once email has been successfully sent
*/

const Mailer = () => {
    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        emailjs.sendForm(
            'service_lf68y8i',
            'template_a7v3kjq',
            e.currentTarget,
            "NIC61fRJW1mmr-YPC"
        ).then(() => {
            console.log("Email sent successfully!")
        }).catch(() => { console.log("Email failed to send.") });
        e.currentTarget.reset()
    };

    const [formClassName, setFormClassName] = useState('formContactUs');
    const [formTextClassName, setFormTextClassName] = useState('formTextHidden');
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const formSubbmitted = () => {
        
        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        if ( name === "" || email === "") {
            alert("Please fill out all fields.");
            return false;
        }
        setFormClassName('formContactUsHidden');
        setFormTextClassName('boldText');
        
    }

    return (
        <div className="border"
        >
            <div className={`${formTextClassName}`}>Your Message has successfully been submitted!</div>
            <form
                name="contact-form"
                className={`${formClassName}`}
                style={{ margin: "5em 5em 5em 6em", justifyContent: 'center', marginTop: "3em" }}
                onSubmit={sendEmail} 
                >
                

                <label
                    style={{ display: 'flex', fontSize: '1.5em', }}
                    className="formText" >Name</label>
                <input
                    type="text"
                    name="name"
                    id="nameInput"
                    className="form-control"
                    ref={nameRef}
                    style={{
                        display: 'flex',
                        width: '96%',
                        height: '1em',
                        padding: '1em',
                        marginTop: "1em",
                        justifyContent: 'center',

                    }}
                />

                <label
                    style={{ display: 'flex', fontSize: '1.5em', marginTop: "20px" }}
                    className="formText" >Email</label>
                <input
                    type="email"
                    name="user_email"
                    id="emailInput"
                    className="form-control"
                    ref={emailRef}
                    style={{

                        display: 'flex',
                        width: '96%',
                        height: '1em',
                        padding: '1em',
                        marginTop: "1em"
                    }}
                />

                <label
                    className="formText"
                    style={{ display: 'flex', fontSize: '1.5em', marginTop: "0.5em" }} >Message</label>
                <textarea
                    name="message"
                    className="form-control"
                    style={{
                        display: 'flex',
                        marginTop: "1.5em",
                        width: '96%',
                        height: '20em',
                        padding: "1em 1em 1em 1em",
                    }} />

                <br />
                <ECLAIRButton handleClick={formSubbmitted} radius='1em' type="submit" text="Send" />

            </form>

        </div>

    )
};

export default Mailer;
