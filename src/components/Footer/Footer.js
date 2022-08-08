import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons/faCoffee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
    return(
        <div>
            <div className="top">
                <h2>Let's work together...</h2>
                <h6><em>How do you take your coffee?</em></h6>
                <div className="coffee-cup-wrapper"><FontAwesomeIcon className="contact-icons brown" icon={ faCoffee }/></div>
            </div>
            <footer>
            <hr id="footerline" />
            <p>Copyright Information goes here. Created for Banyan Labs OJT</p>
            </footer>
        </div>
        
    )
}

export default Footer;