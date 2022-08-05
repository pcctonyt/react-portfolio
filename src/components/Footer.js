import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons/faCoffee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return(
        <div className="footer">
            <h2>Let's work together...</h2>
            <h6><em>How do you take your coffee?</em><FontAwesomeIcon className="contact-icons brown" icon={ faCoffee }/></h6>
        <footer>
            <hr id="footerline" />
            <p>Copyright Information goes here. Created for Banyan Labs OJT</p>
        </footer>
        </div>
    )
}

export default Footer;