import React from "react";
import Typed from "react-typed";
import ContactForm from "./ContactSection/ContactForm";
import ContactIcons from "./ContactSection/ContactIcons";


const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>Anthony Thompson</h1>
            <Typed className="typed-text" 
            strings={["Software Development using HTML 5, CSS, and JavaScript", "Deterrence Game Development", "Full Stack Development Student", "Front End UI Development using React.js"]} typeSpeed={40} backSpeed={60}loop/>
            <a href="#" className="btn-main-description">Contact Me</a>
        </div>
        <ContactIcons />
        <ContactForm />
    </div>
  )
}

export default Header;