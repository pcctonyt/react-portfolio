import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetCards from "./components/DetCards/DetCards";
import DetSpecs from "./components/DetSpecs/DetSpecs";
import ScoreSheet from "./components/ScoreSheet/ScoreSheet";
import Treaty from "./components/Treaty/Treaty";
import Popup from "./components/Popup/Popup";
import AboutDeterrence from "./components/AboutDeterrence/AboutDeterrence";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

const App = () =>  {

  const [ aboutPopup, setAboutPopup ] = useState(false);

  const [ cardPopup, setCardPopup ] = useState(false);

  const [ infoPopup, setInfoPopup ] = useState(false);

  const [scorePopup, setScorePopup ] = useState(false);

  const [treatyPopup, setTreatyPopup ] = useState(false);

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
      <h1 className="button-header">Click a button below to learn more!</h1>
            <div className="popup-btn-group">
            
              <span className="contact-btn-wrapper">
                <button className="btn-main-description" id="det-card" onClick={() => setCardPopup(true)}>Deterrence Information Card</button>
                <Popup trigger={cardPopup} setTrigger={ setCardPopup }>
                  <DetCards className="about-deterrence" />
                </Popup>                
              </span>

              <span className="contact-btn-wrapper">
                <button className="btn-main-description" onClick={() => setInfoPopup(true)}>Deterrence General Information</button>
                <Popup trigger={infoPopup} setTrigger={ setInfoPopup }>
                  <DetSpecs />
                </Popup>
              </span>

              <span className="contact-btn-wrapper">
                <button className="btn-main-description" onClick={() => setAboutPopup(true)}>Deterrence General Overview</button>
                <Popup trigger={aboutPopup} setTrigger={ setAboutPopup }>
                  <AboutDeterrence />
                </Popup>
              </span>

                <span className="contact-btn-wrapper">
                  <button className="btn-main-description" id="score" onClick={() => setScorePopup(true)}>Deterrence Score Sheet v5.1.0</button>
                  <Popup trigger={scorePopup} setTrigger={ setScorePopup }>
                    <ScoreSheet />
                  </Popup>
                </span>              
                
                <span className="contact-btn-wrapper">
                  <button className="btn-main-description" id="treaty" onClick={() => setTreatyPopup(true)}>Deterrence Treaty Chart v5.0.1</button>
                  <Popup trigger={treatyPopup} setTrigger={ setTreatyPopup }>
                    <Treaty />
                  </Popup>
                </span> 

                <Popup trigger={contactTimed} setTrigger={setContactTimed}>
                <ContactForm />
                </Popup> 
            </div>
      <Footer />
    </div>
  )
}

export default App
