
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcons = () => {
  return (
    <div className="contact" id="icons">
        <h1>
            <span>View my work and say hi!:</span>
        </h1>
        <div>
            <a href="https://www.google.com/webhp?authuser=1"><FontAwesomeIcon className="contact-icons white" icon={ faMailForward } /></a>
            
            <a href="https://github.com/pcctonyt"><FontAwesomeIcon className="contact-icons purple" icon={ faGithub } /></a>
            <a href="https://www.linkedin.com/in/anthony-thompson-b2a31a236"><FontAwesomeIcon className="contact-icons blue" icon={ faLinkedin } /></a>
        </div>
    </div>
  )
}

export default ContactIcons;