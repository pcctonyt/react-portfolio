
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactIcons.css";

const ContactIcons = () => {
  return (
    <div className="contact" id="icons">
        <h1 className="greeting">
            <span>View my work and say hi!:</span>
        </h1>
        <div>
          <span className="icon-layout"><a href="https://www.google.com/webhp?authuser=1"><FontAwesomeIcon className="contact-icons orange" icon={ faEnvelopeOpenText} /></a></span>
          <span className="icon-layout"><a href="https://github.com/pcctonyt"><FontAwesomeIcon className="contact-icons purple" icon={ faGithub } /></a></span>
          <span className="icon-layout"><a href="https://www.linkedin.com/in/anthony-thompson-b2a31a236"><FontAwesomeIcon className="contact-icons blue" icon={ faLinkedin } /></a></span>
        </div>
    </div>
  )
}

export default ContactIcons;