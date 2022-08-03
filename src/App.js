import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
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

/* 1:04:23 React JS & Bootstrap | Build Portfolio App | 4k by 80/20 coding*/