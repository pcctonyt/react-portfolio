import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
        const [ inputtedName, setInputtedName ] = useState("");

        const [ inputtedEmail, setInputtedEmail ] = useState("");

        const [ inputtedMessage, setInputtedMessage ] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            setInputtedName("");
            setInputtedEmail("");
            setInputtedMessage("");
        }

  return (
    <div id="form">
        <div className="form">
                <form onSumbit={handleSubmit}>
                    <h1>Contact Information Form</h1>
                    <label htmlFor="inputtedName">Name:
                    <input className="contact-input"type="text" id ="inputtedName" name="inputtedName" value={inputtedName} onChange={(e) => setInputtedName(e.target.value)} placeholder="Please enter your name:" required /></label>
                    <label htmlFor="inputtedEmail">Email Address:<input className="contact-input"type="email" id="inputtedEmail" name="inputtedEmail" value={inputtedEmail} onChange={(e) => setInputtedEmail(e.target.value)} placeholder="Please enter a valid email address:" required/></label>
                    
                    <h5>Leave me a message:</h5>
                    <label htmlFor="inputtedMessage"><textarea rows="5" cols="20" name="inputtedMessage" id="inputtedMessage" value={inputtedMessage} onChange={(e) => setInputtedMessage(e.target.value)}placeholder="Enter your message here:"></textarea></label>
                    
                    <button className="btn btn-success submit-btn" type="submit">Submit</button>
                </form>
        </div>
    </div>
  )
}

export default ContactForm;