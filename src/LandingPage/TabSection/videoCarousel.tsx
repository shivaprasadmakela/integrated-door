import React, { useState } from "react";
import "./videoCarousel.css"; // CSS for styling the carousel

interface VideoCarouselProps {
  videos: string[]; // Array of video URLs
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Convert regular video URL to YouTube embed format
  const convertToEmbedUrl = (videoUrl: string) => {
    const videoId = videoUrl.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="videoCarousel">
      {/* Button for Previous Slide */}
      <button className="videoCarousel-btn" onClick={prevSlide}>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
          </svg>
        </span>
      </button>

      {/* Display Videos */}
      <div className="videoCarousel-videos">
        {videos.map((video, index) => (
          <div
            className={`videoCarousel-item ${
              index === currentIndex ? "active" : "inactive"
            }`}
            key={index}
          >
            {/* Only render active video */}
            {index === currentIndex && (
              <iframe
                className="videoCarouselVideo"
                width="560"
                height="315"
                src={convertToEmbedUrl(video)}
                title={`YouTube video player ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>

      {/* Button for Next Slide */}
      <button className="videoCarousel-btn left" onClick={nextSlide}>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default VideoCarousel;
