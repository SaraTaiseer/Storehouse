import React from "react";
import "./HeroSection.css";
import home2 from './../../assets/home2.png'
function HeroSection() {
  return (
    <div className="hero-container">
      <img src={home2} alt="Pro" style={{height:"auto",width:"100%"}} />
    </div>
  );
}

export default HeroSection;
