import React from "react";
import DetCards from "./DetCards";
import DetSpecs from "./DetSpecs";
import "./AboutDeterrence";

const AboutDeterrence = () => {
  return (
    <div className="about-deterrence" id="deterrence">
        <h1>Deterrence General Information</h1>
        <h2>Deterrence is a new version of the game of chess.  It offers three new Game Concepts to the existing chess gameplay.  These are:  Use of nuclear weapons "Nuclear Units" and SDI Defense Units.  Use of Treaty Negotiations, introducing the idea of some Variable Rules that can be changed during negotations, and lastly, playing for scored points as well as position "when one player checkmates the other or when one player resigns".</h2>
        <DetCards />
        <DetSpecs />
    </div>
  )
}

export default AboutDeterrence;