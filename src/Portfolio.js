import React from "react";
import Navbar from "./components/Navbar";
import BodyHeading from "./components/BodyHeading";
import ContactInfo from "./components/ContactInfo";
import DetCards from "./components/DetCards";
import DetScore from "./components/DetScore";
import DrumMachine from "./components/DrumMachine";
import DetSpecs from "./components/DetSpecs";
import RandQuote from "./components/RandQuote";
import Footer from "./components/Footer";

const Portfolio = () => {
    return(
        <div>
            <Navbar className="projects"/>
            <BodyHeading />
            <section id="welcome-section">
                <section>
                <div className="project-tile">
                <a id="profile-link" href="https://github.com/pcctonyt" target="_blank" rel="noreferrer">GitHub<i className="fab fa-github"></i></a>
                </div>
                <h1>These Are My Six Projects</h1>
                <div className="projects">
                    <ContactInfo />
                    <DetCards />
                    <DetScore />
                    <DrumMachine />
                    <DetSpecs />
                    <RandQuote />
                </div>
                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Portfolio;