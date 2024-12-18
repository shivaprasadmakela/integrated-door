import AutoPlayCarousel from "./autoPlayCarousel";
import "./topSection.css";
import AnimatedValue from "./animatedValueNum";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./scrollToTop";


export function NavBar() {

  const handleScroll = () => {
    window.scrollTo({
      top: 4520, // Vertical position to scroll to
      left: 0, // Horizontal position to scroll to
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#aboutUs") {
      const aboutSection = document.getElementById("aboutUs");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    // if (location.hash === "#contactUs") {
    //   const aboutSection = document.getElementById("aboutUs");
    //   if (aboutSection) {
    //     aboutSection.scrollIntoView({ behavior: "smooth" });
    //   }
    // }
  }, [location]);

  return (
    <nav className="navBar">
      <Link to="/">
        <img
          className="mainlogoCompant"
          alt="logo"
          src={process.env.PUBLIC_URL + "Asserts/svgLogo.svg"}
        />
      </Link>
      <ul className="navLinks">
        <li>
          <Link to="/" className="links" >Home</Link>
        </li>
        <li>
          <a href="/#aboutUs" className="links">
            About Us
          </a>
        </li>
        <li>
          <Link to="/team" className="links">Team</Link>
        </li>
        <li>
          <Link to="/gallary" className="links" >Gallary</Link>
        </li>
        <li>
          <Link to="/services" className="links" >Services</Link>
        </li>
        <li onClick={handleScroll} >
          {/* <a href="/#contactUs" className="links">
            Contact Us
          </a> */}
          <Link to='/' className="links" >Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}


function MainWebsite() {


  const keyHighlights = [
    {
      title: 15,
      symbol: "+",
      description: "New Doors",
    },
    {
      title: 60,
      symbol: "+",
      description: "Years of Experience",
    },
    {
      title: 5.1,
      symbol: "x",
      description: "Investment multiple",
    },
    {
      title: 100,
      symbol: "%",
      description: "Assurence Guarantee ",
    },
  ];

  const images = [
    "Asserts/Background.svg",
    "Asserts/hero6.webp",
    "Asserts/hero8.webp",
  ];
  const bannerMobileImages = [
    "Asserts/veneer door.webp",
    "Asserts/teakwood door_edited.webp",
    "Asserts/red-door.webp",
    "Asserts/cutpaste laminate door .webp"
  ];

  return (
    <>
      {/* <nav className="navBar">
        <img
          className="mainlogoCompant"
          alt="logo"
          src={process.env.PUBLIC_URL + "Asserts/svgLogo.svg"}
        />
        <ul className="navLinks">
          <li>
            <a href="#home" className="links">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutUs" className="links">
              About Us
            </a>
          </li>
          <li>
            <Link to="/team" className="links" >Team</Link>
          </li>
          <li>
            <a href="#services" className="links">
              Services
            </a>
          </li>
          <li>
            <a href="#contactFormNew" className="links">
              Contact Us
            </a>
          </li>
        </ul>
      </nav> */}
      <NavBar />
      <div className="toptop" id="home"></div>

      <div className="mainTopContainer">

        <div className="topBannerDesktop">
          <AutoPlayCarousel images={images} />
        </div>

        <div className="topBannerMobile">
          <AutoPlayCarousel images={bannerMobileImages} />
        </div>


        <div className="textContainer">
          <h1 className="topHeading1"> INTEGRATED DOOR </h1>

          <p className="topPara">
            Integrated Door offers innovative door systems that combine
            security, durability, and design. Aesthetically pleasing entryways .
          </p>
        </div>
      </div>
      <div className="keyHighlights">
        {keyHighlights.map((highlight, index) => (
          <div className="keyHighlight" key={index}>

            <div className="numbersContainer">
              <AnimatedValue start={0} end={highlight.title} duration={2000} />
              <h1 className="count-up"> {highlight.symbol}</h1>
            </div>

            <p className="keyDescription">{highlight.description}</p>
          </div>
        ))}
        <div id="aboutUs"></div>
      </div>


    </>
  );
}

export default MainWebsite;
