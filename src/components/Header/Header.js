import React from "react";
import Typed from "react-typed";
import ContactIcons from "../ContactIcons/ContactIcons";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1 className="text-shadow"><em>Anthony Thompson</em></h1>
            <Typed className="typed-text text-shadow" 
            strings={["Development using HTML 5, CSS, and JavaScript", "Deterrence Game Development", "Full Stack Development Student", "Front End UI using React.js"]} typeSpeed={40} backSpeed={60}loop/>
        </div>
        <ContactIcons />
    </div>
  )
}

export default Header;