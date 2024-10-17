import AutoPlayCarousel from "./autoPlayCarousel";
import "./topSection.css";


function MainWebsite() {
  const keyHighlights = [
    {
      title: "15+",
      description: "New Doors",
    },
    {
      title: "60+",
      description: "Years of Experience",
    },
    {
      title: "2.1X",
      description: "Investment multiple",
    },
    {
      title: "100%",
      description: "Assurence Guarantee ",
    },
  ];

  const images = [
    "Asserts/Background.svg",
    "Asserts/hero7.webp",
    "Asserts/hero8.webp",
  ];

  return (
    <>
      <nav className="navBar">
        <img
          className="mainlogoCompant"
          alt="logo"
          src={process.env.PUBLIC_URL + "Asserts/svgLogo.svg"}
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
      <div className="toptop"></div>

      <div className="mainTopContainer">
        <AutoPlayCarousel images={images} />
        {/* <img
          className="topMainImage"
          alt="mainBackground"
          src={process.env.PUBLIC_URL + "Asserts/Background.svg"}
        /> */}

        <img
          className="topMainImageMobile"
          alt="logo"
          src={process.env.PUBLIC_URL + "Asserts/mobiletopimage.png"}
        />

        <div className="textContainer">
          <h1 className="topHeading">INTEGRATED DOOR</h1>
          <p className="topPara">
            Integrated Door offers innovative door systems that combine
            security, durability, and design. Aesthetically pleasing entryways .
          </p>
        </div>
      </div>
      <div className="keyHighlights">
        {keyHighlights.map((highlight, index) => (
          <div className="keyHighlight" key={index}>
            <h2 className="keyTitle">{highlight.title}</h2>
            <p className="keyDescription">{highlight.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default MainWebsite;
