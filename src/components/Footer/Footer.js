import React from "react";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons/faChessBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
    return(
        <div>
            <div className="footer-top">
                <h2 className="lets">Let's work together...</h2>
                <h6><em>Plain chess or exciting Deterrence?</em></h6>
                <div className="board-wrapper"><FontAwesomeIcon className="contact-icons brown" icon={ faChessBoard }/></div>
            </div>
            <footer className="footer-bottom">
            <p>Copyright Information goes here. Created for Banyan Labs OJT</p>
            </footer>
        </div>
        
    )
}

export default Footer;