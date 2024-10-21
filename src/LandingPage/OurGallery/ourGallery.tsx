import { v4 as uuidv4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config, useSpring, animated } from "react-spring";
import "./ourGallery.css";
import Styles from "./card.module.css";

interface CardProps {
  imagen: string;
  title: string;
}

interface CarouselCard {
  key: string;
  content: JSX.Element;
}

interface CarrousselProps {
  cards: CarouselCard[];
  offset: number;
  showArrows: boolean;
  width: string;
  height: string;
  margin: string;
  overflow: string;
}

function Carroussel(props: CarrousselProps) {
  const [cards, setCards] = useState<CarouselCard[]>([]);
  const [offsetRadius, setOffsetRadius] = useState<number>(2);
  const [showArrows, setShowArrows] = useState<boolean>(false);
  const [goToSlide, setGoToSlide] = useState<number | null>(null);

  useEffect(() => {
    const table = props.cards.map((element, index) => {
      return { ...element, onClick: () => setGoToSlide(index) };
    });
    setCards(table);
  }, [props.cards]);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        overflow: props.overflow,
        margin: props.margin,
      }}
    >
      <h1 className="mainTextHeading">
        WHAT ARE YOU
        <span className="mainTextHeading mainTextSpan"> LOOKING FOR??</span>
      </h1>
      <div className="carouselContainer">
        <img
          className="ourGalaryBackImage"
          alt="ourGalaryBackImage"
          src={process.env.PUBLIC_URL + "Asserts/hero1.webp"}
        />
        <Carousel
          slides={cards}
          goToSlide={goToSlide !== null ? goToSlide : undefined}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
      </div>
    </div>
  );
}

function Button({ text }: { text: string }) {
  return <button className="topbtn1">{text}</button>;
}

function Card({ imagen, title }: CardProps) {
  const [show, setShown] = useState<boolean>(false);

  const props3 = useSpring({
    opacity: 1,

    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
      <div className={Styles.btnn}>
        <Button text="View More" />
      </div>
    </animated.div>
  );
}

function OurGallery() {
  const cards: CarouselCard[] = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={
            process.env.PUBLIC_URL + "Asserts/cutpaste laminate door .webp"
          }
          title="Cut Paste Laminate Doors"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={process.env.PUBLIC_URL + "Asserts/Frames.webp"}
          title="Frames"
        />
      ),
    },
    {
      key: uuidv4(),

      content: (
        <Card
          imagen={process.env.PUBLIC_URL + "Asserts/prime coated door.webp"}
          title="Prime Coated Doors"
        />
      ),
    },
    {
      key: uuidv4(),

      content: (
        <Card
          imagen={process.env.PUBLIC_URL + "Asserts/teakwood door_edited.webp"}
          title="Take Doors"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={process.env.PUBLIC_URL + "Asserts/veneer door.webp"}
          title="Venner Doors"
        />
      ),
    },
  ];

  const iconAimSection = [
    {
      image: "Asserts/building-elevator-doors-svgrepo-com.svg",
      title: "Dummy Door Title",
      description: "We have Doors and Accessories",
    },
    {
      image: "Asserts/opened-outlined-door-svgrepo-com.svg",
      title: "Dummy Door Title",
      description: "We have Doors and Accessories",
    },
    {
      image: "Asserts/open-exit-door-svgrepo-com.svg",
      title: "Dummy Door Title",
      description: "We have Doors and Accessories",
    },
    {
      image: "Asserts/double-door-closed-svgrepo-com.svg",
      title: "Dummy Door Title",
      description: "We have Doors and Accessories",
    },
  ];

  return (
    <div>
      <div>
        <Carroussel
          cards={cards}
          height="92vh"
          width="95vw"
          overflow="hidden"
          margin="0 auto"
          offset={200}
          showArrows={false}
        />
      </div>

      <div className="iconAimSection">
        {iconAimSection.map((highlight, index) => (
          <div className="iconAimHighlight" key={index}>
            <img
              src={process.env.PUBLIC_URL + highlight.image}
              alt="iconAimImage"
              className="iconAimImage"
            />

            <h2 className="iconAimTitle">{highlight.title}</h2>
            <p className="iconAimDescription">{highlight.description}</p>
          </div>
        ))}
      </div>
      <div className="straightLine"></div>
      <div id="services"></div>
    </div>
  );
}

export default OurGallery;
