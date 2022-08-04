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

  return (
    <div id="form">
        <div className="form">
                <form onSumbit={handleSubmit}>
                    <h1>Contact Information Form</h1>
                    <label htmlFor="inputtedName">{inputtedName}
                    <input type="text" id ="inputtedName" name="inputtedName" value={inputtedName} onChange={(e) => setInputtedName(e.target.value)} placeholder="Please enter your name:" required /></label>
                    <label htmlFor="inputtedEmail">{inputtedEmail}<input type="email" id="inputtedEmail" name="inputtedEmail" value={inputtedEmail} onChange={(e) => setInputtedEmail(e.target.value)} placeholder="Please enter a valid email address:" required/></label>
                    
                    <label for="inputtedMessage">{inputtedMessage}Leave me a message if you like!  I'll get back to you as soon as I can, thank-you!<textarea rows="5" cols="20" name="inputtedMessage" id="inputtedMessage" value={inputtedMessage} onChange={(e) => setInputtedMessage(e.target.value)}placeholder="Enter your message here:"></textarea></label>
                    
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
        </div>
    </div>
  )
}

export default ContactForm;