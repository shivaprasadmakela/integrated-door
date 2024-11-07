import React, { useState, useEffect, useCallback } from "react";
import "./autoPlayCarousel.css";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
}

const AutoPlayCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 4500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(autoPlay);
  }, [nextSlide, autoPlayInterval]);

  return (
    <div className="autoPlayCarousel">
      <button className="autoPlayCarousel-btn" onClick={prevSlide}>
        {/* Button content */}
      </button>

      <div className="autoPlayCarousel-images">
        {images.map((image, index) => (
          <div
            className={`autoPlayCarousel-item ${index === currentIndex ? "active" : ""
              }`}
            key={index}
          >
            {index === currentIndex && (
              <img
                className="autoPlayCarouselImage"
                src={process.env.PUBLIC_URL + image}
                alt={`Slide ${index}`}
              />
            )}
          </div>
        ))}
      </div>

      <button className="autoPlayCarousel-btn" onClick={nextSlide}>
        {/* Button content */}
      </button>
    </div>
  );
};

export default AutoPlayCarousel;
