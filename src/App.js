import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetCards from "./components/DetCards/DetCards";
import DetSpecs from "./components/DetSpecs/DetSpecs";
import Popup from "./components/Popup/Popup";
import AboutDeterrence from "./components/AboutDeterrence/AboutDeterrence";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

const App = () =>  {

  const [ aboutPopup, setAboutPopup ] = useState(false);

  const [ cardPopup, setCardPopup ] = useState(false);

  const [ infoPopup, setInfoPopup ] = useState(false);

  const [ contactTimed, setContactTimed ] = useState(false);

    useEffect(() => {
      setTimeout(() => {
      setContactTimed(true);
      }, 5000);
    }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
            <div className="popup-btn-group">
            <h1>Click a button to learn more!</h1>
                <button className="btn-main-description" onClick={() => setCardPopup(true)}>Deterrence Information Card</button>
              <Popup trigger={cardPopup} setTrigger={ setCardPopup }>
                <DetCards className="about-deterrence" />
              </Popup>

              <button className="btn-main-description" onClick={() => setInfoPopup(true)}>Deterrence General Information</button>
              <Popup trigger={infoPopup} setTrigger={ setInfoPopup }>
                <DetSpecs />
              </Popup>

              <button className="btn-main-description" onClick={() => setAboutPopup(true)}>More About Deterrence</button>
              <Popup trigger={aboutPopup} setTrigger={ setAboutPopup }>
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