import Carousel from "./carousel";
import "./topCards.css";



const profileImage = [
  "Asserts/bad786dfe4f227555be6fa2484b0b9a3.webp",
  "Asserts/collection-hand-drawn-profile-icons_1323905-5.webp",
  "Asserts/il_794xN.3120127459_kz1z.jpg",
];

const images = [
  "Asserts/cutpaste laminate door .webp",
  "Asserts/teakwood door_edited.webp",
  "Asserts/prime coated door.webp",
  "Asserts/Frames.webp",
];

const IconImages = [
  "Asserts/heart.gif",
  "Asserts/eye.gif",
  "Asserts/student.gif",
  "Asserts/home.gif",
  "Asserts/valentines-day.gif",
];


function TopCards() {
  return (
    <>
      <div className="aa" >
        <div className="mainDivContainer">
          <div className="vertical-text">
            <h1 className="whoText">WHO</h1>
            <h1 className="whoText">WE</h1>
            <h1 className="whoText">ARE</h1>
          </div>
          <div className="cardOne">
            <div className="iconContainer">
              {IconImages.map((image, index) => (
                <button className="icon" key={index}>
                  <img
                    alt="svgIcon"
                    className="svg"
                    src={process.env.PUBLIC_URL + image}
                  />
                </button>
              ))}
            </div>
            <div className="profileSection">
              <Carousel images={profileImage} />
              <h1 className="mainTextHeading">
                Our
                <span className="mainTextHeading mainTextSpan"> Team</span>
              </h1>
            </div>
          </div>

          <div className="cardThree">
            <h1 className="mainTextHeading">
              Our
              <span className="mainTextHeading mainTextSpan"> Products</span>
            </h1>
            <div className="carouselGrid">
              <Carousel images={images} />
            </div>
          </div>
          <div className="cardTwo">
            <div className="cardTwoTopContainer">
              <h1 className="cardTwoHeader">
                {" "}
                <span className="we">We Are</span> Exceptional artistry for your{" "}
                <span>interiors </span>
              </h1>
              <p className="cardTwoPara">
                Home furnishing doors with premium quality materials sourced
                from all over the world.
              </p>

              <a href="/see" className="seeMorePara">
                <p className="seeMorePara">See More</p>
              </a>
            </div>
          </div>
        </div>

        <div className="straightLine"></div>
      </div>
    </>
  );
}

export default TopCards;
