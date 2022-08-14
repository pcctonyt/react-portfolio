import React from "react";
import Header from "./components/Header/Header";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import ValidationSection from "./components/ValidationSection/ValidationSection";


const Treaty = () => {
    return(
        <div className="app-wrapper">
            <Header />
            <div className="treaty-wrapper">
                <SectionOne />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
            </div>
            <ValidationSection />
        </div>
        
    )
}

export default Treaty;