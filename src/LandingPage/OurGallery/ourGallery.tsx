import { v4 as uuidv4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config, useSpring, animated } from "react-spring";
import './ourGallery.css'
import Styles from './card.module.css'

interface CardProps {
  imagen: string; 
}

interface CarouselCard {
  key: string; 
  content: JSX.Element; 
  title: string;
}

interface CarrousselProps {
  cards: CarouselCard[]; 
  offset: number; 
  showArrows: boolean; 
  width: string; 
  height: string; 
  margin: string; 
  overflow: string
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
      style={{ width: props.width, height: props.height,overflow: props.overflow, margin: props.margin }}
    >
    <h1 className="mainTextHeading">WHAT ARE YOU
    <span className="mainTextHeading mainTextSpan"> LOOKING FOR??</span></h1>
      <Carousel
        slides={cards}
        goToSlide={goToSlide !== null ? goToSlide : undefined}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}

function Button({ text }: { text: string }) {
  return <button className="topbtn1">{text}</button>;
}

function Card({ imagen }: CardProps) {
  const [show, setShown] = useState<boolean>(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      <div className={Styles.btnn}>
        <Button text="View More"  />
        
      </div>
    </animated.div>
  );
}

function OurGallery() {
  const cards: CarouselCard[] = [
    {
      key: uuidv4(),
      title:"Cut Paste Laminate Doors",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      title:"Frames",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      title:"Prime Coated Doors",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      title:"Take Doors",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      title:"Venner Doors",
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];

  return (
    <div>
      <div>
        <Carroussel
          cards={cards}
          height="95vh"
          width="95vw"
          overflow="hidden"
          margin="0 auto"
          offset={200}
          showArrows={false}
        />
      </div>
      <div className="straightLine"></div>

    </div>
  );
}

export default OurGallery;
