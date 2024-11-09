import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import your custom CSS for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]); // Only re-run effect if images.length changes

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-slide">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
