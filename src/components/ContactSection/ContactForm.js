import React, { useState } from "react";

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

        const handleChange = (e) => {
            let { name, value } = e.target;
            setInputtedName(e.target.inputtedName);
            setInputtedEmail(e.target.inputtedEmail);
            setInputtedMessage(e.target.inputtedMessage);
        }

  return (
    <div id="form">
        <div className="contact">
                <button className="btn btn-primary">Open Form</button>
                <form onSumbit={handleSubmit}>
                    <h1>Contact Information Form</h1>
                    <input type="text" name="inputtedName" value={inputtedName} onChange={handleChange} placeholder="Please enter your name:" required />{inputtedName}
                    <input type="email" name="inputtedEmail" value={inputtedEmail} onChange={handleChange} placeholder="Please enter a valid email address:" required/>{inputtedEmail}
                    <label for="inputtedMessage">Leave me a message if you like!  I'll get back to you as soon as I can, thank-you!</label>
                    <textarea rows="5" cols="20" name="inputtedMessage" value={inputtedMessage} placeholder="Enter your message here:">{inputtedMessage}</textarea>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
        </div>
    </div>
  )
}

export default ContactForm;