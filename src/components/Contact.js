
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
        <h1>
            <span>View my work and say hi!:</span>
        </h1>
        <div>
            <a href="https://github.com/pcctonyt"><FontAwesomeIcon className="contact-icons purple" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/anthony-thompson-b2a31a236"><FontAwesomeIcon className="contact-icons blue" icon={faLinkedin} /></a>
        </div>
    </div>
  )
}

export default Contact;