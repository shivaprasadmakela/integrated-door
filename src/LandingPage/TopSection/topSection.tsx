import TopCards from './topCards'
import "./topSection.css";

function MainWebsite() {
  return (
    <>
      <nav className="navBar">
        <img
          className="mainlogo"
          alt="logo"
          src={process.env.PUBLIC_URL + "Asserts/bad786dfe4f227555be6fa2484b0b9a3.webp"}
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
      </nav>
      <div className="mainTopContainer">
        <div className="textContainer">
          <h1 className="topHeading">INTEGRATED DOOR</h1>
          <p className="topPara">
            Integrated Door offers innovative door systems that combine
            security, durability, and design. Aesthetically pleasing entryways .
          </p>
          <div>
            <button className="topbtn1">Get in touch</button>
            <button className="topbtn1 topbtn2">Watch Video</button>
          </div>
        </div>

        <TopCards />
        
      </div>
    </>
  );
}

export default MainWebsite;
