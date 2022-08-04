import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutDeterrence from "./components/AboutDeterrence/AboutDeterrence";
import Popup from "./components/Popup";
import { useState } from "react";

const App = () =>  {
  const [ buttonPopup, setButtonPopup ] = useState(false);

  return (
    <div>
      <Navbar />
      <Header />
      <AboutDeterrence />
      <Footer />
      <button className="btn-main-description" onClick={() => setButtonPopup(true)}>Contact Me</button>
      <Popup trigger={buttonPopup} setTrigger={ setButtonPopup }>
        <h3>My Popup</h3>
      </Popup>
    </div>
  )
}

export default App

/* 1:14:00 difficulties getting react-particles running, new react-ts-particles running with ts particles installed, but didn't know how to style that div. | React JS & Bootstrap | Build Portfolio App | 4k by 80/20 coding*/