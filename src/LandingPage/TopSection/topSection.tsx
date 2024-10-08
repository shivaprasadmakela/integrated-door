import React from "react";
import "./topSection.css";

function MainWebsite() {
  return (
    <>
      <nav className="navBar">
        <img
          className="mainlogo"
          alt="logo"
          src={process.env.PUBLIC_URL + "Asserts/dummy-logo-3.png"}
        />
        <ul className="navLinks">
          <li>
            <a href="#Home" className="links">
              Home
            </a>
          </li>
          <li>
            <a href="#AboutUs" className="links">
              About Us
            </a>
          </li>
          <li>
            <a href="#Services" className="links">
              Services
            </a>
          </li>
          <li>
            <a href="#ContactUs" className="links">
              Contact Us
            </a>
          </li>
        </ul>
        <img
          className="filterImage"
          alt="filter"
          src={process.env.PUBLIC_URL + "Asserts/filter_icon.png.svg"}
        />
      </nav>
      <div>
        <img
          className="mainDoor"
          src={process.env.PUBLIC_URL + "Asserts/maindoor.jpg"}
          alt="main door"
        />
        <div className="mainTextContainer">
         
        <h5>QUALITY IS ALWAYS OUR PRIORITY</h5>
        <span>
        <h1>INTEGRATED</h1>
        <h1 className="secondText">DOOR</h1>
        </span>
          </div>
          <div className="callButton"></div>
        </div>
        
        <div className="valuesContainer">
            <div className="value">
                <h1 className="valueNumber">10 <span className="valueSpan">+</span></h1>
                <p className="valueText">Years of Experience</p>
            </div>
            <div className="value">
                <h1 className="valueNumber">73 <span className="valueSpan">%</span></h1>
                <p className="valueText">Open Space</p>
            </div>
            <div className="value">
                <h1 className="valueNumber">50 <span className="valueSpan">+</span></h1>
                <p className="valueText">Good Amenities</p>
            </div>
            <div className="value">
                <h1 className="valueNumber">2.1 <span className="valueSpan">x</span></h1>
                <p className="valueText">Investement Return</p>
            </div>
        </div>
      
    </>
  );
}

export default MainWebsite;
