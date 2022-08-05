import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import DetCards from "./components/AboutDeterrence/DetCards";
//import DetSpecs from "./components/AboutDeterrence/DetCards";
import Popup from "./components/Popup";
import AboutDeterrence from "./components/AboutDeterrence/AboutDeterrence";
import ContactForm from "./components/ContactSection/ContactForm";

const App = () =>  {

  const [ aboutPopup, setAboutPopup ] = useState(false);

  //const [ cardPopup, setCardPopup ] = useState(false);

  //const [ infoPopup, setInfoPopup ] = useState(false);

  const [ contactTimed, setContactTimed ] = useState(false);

    useEffect(() => {
      setTimeout(() => {
      setContactTimed(true);
      }, 5000);
    }, []);

  return (
    <div>
      <Navbar />
      <Header />
            <div className="popup-btn-group">
            <h1>Click a button to learn more!</h1>
            {/*
                <button className="btn-main-description" onClick={() => setCardPopup(true)}>Deterrence Information Card</button>
              <Popup trigger={cardPopup} setTrigger={ setCardPopup }>
                <h3>where I want the det card to go</h3>
                <DetCards className="about-deterrence" />
              </Popup>

              <button className="btn-main-description" onClick={() => setInfoPopup(true)}>Deterrence General Information</button>
              <Popup trigger={infoPopup} setTrigger={ setInfoPopup }>
                <h3>This fires the card</h3>
                <DetSpecs />
              </Popup>

            
            */}
              
              <button className="btn-main-description" onClick={() => setAboutPopup(true)}>More About Deterrence</button>
              <Popup trigger={aboutPopup} setTrigger={ setAboutPopup }>
                <h3>This fires the whole component</h3>
                <AboutDeterrence />
              </Popup>

              <Popup trigger={contactTimed} setTrigger={setContactTimed}>
                <ContactForm />
              </Popup>
            </div>
      <Footer />
    </div>
  )
}

export default App

/* 1:14:00 difficulties getting react-particles running, new react-ts-particles running with ts particles installed, but didn't know how to style that div. | React JS & Bootstrap | Build Portfolio App | 4k by 80/20 coding*/