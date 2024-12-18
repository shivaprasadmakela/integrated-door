import { useState, useEffect } from "react";
import { Modal } from 'antd';
import { v4 as uuidv4 } from "uuid";
import Carousel from "react-spring-3d-carousel";
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
    <>
      <div className="ourGalleryMain">
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
      </div>

      <div className="ourGalleryMainMobile">

      </div>
    </>
  );
}


function Card({ imagen, title }: CardProps) {
  const [show, setShown] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


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
        {/* <Button text="View More" /> */}
        <button style={{cursor: "pointer", width: "150px", height: '45px', padding: 10, backgroundColor: "#0094ff", border: "none", color: 'white', borderRadius: 8, fontSize: 15 }} onClick={showModal}> View More </button>
      </div>
      <Modal width={1000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* <ModelBox /> */}
        {/* title="Basic Modal" */}
        <div className='modelContainer' >
          <img src={imagen} style={{ height: 350, borderRadius: 5 }} alt="" />
          <div>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
          </div>
        </div>
      </Modal>
    </animated.div >
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
      <div className="car">
        <Carroussel
          cards={cards}
          height="800px"
          width="95vw"
          overflow="hidden"
          margin="0 auto"
          offset={200}
          showArrows={false}
        />
      </div>
<div className="iconAimSectionMain">
      <div>
      <h1 className="mainTextHeading">
      CENTRIC 
            <span className="mainTextHeading mainTextSpan">  ACCESSORIES</span>
          </h1>
      </div>
      <div className="iconAimSection">
      
        {iconAimSection.map((highlight, index) => (
          // <div className="iconAimHighlight" key={index}>
          //   <img
          //     src={process.env.PUBLIC_URL + highlight.image}
          //     alt="iconAimImage"
          //     className="iconAimImage"
          //   />
          //   <h2 className="iconAimTitle">{highlight.title}</h2>
          //   <p className="iconAimDescription">{highlight.description}</p>
          // </div>

          <div className="cardGallery" key={index} >
            <div className="top-card">
              <img
                src={process.env.PUBLIC_URL + highlight.image}
                alt="iconAimImage"
                className="iconAimImage"
              />
            </div>
            <div className="bottom-card">
              <div className="card-content">
                <span className="card-title">{highlight.title}</span>
                <p className="card-txt">{highlight.description}</p>
                {/* <a href="#" className="card-btn">
                  Read More
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      {/* <div className="straightLine"></div> */}
    </div>
  );
}

export default OurGallery;
