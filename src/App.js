import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const App = () =>  {
  
  return (
    <div>
      <Particles params={{
        particles: {
          number: {
            value: 30, 
            density: {
              enable: true, 
              value_area: 900}
                  }
                  }
      }} />
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default App

/* 1:14:00 difficulties getting react-particles running, new react-ts-particles running with ts particles installed, but didn't know how to style that div. | React JS & Bootstrap | Build Portfolio App | 4k by 80/20 coding*/