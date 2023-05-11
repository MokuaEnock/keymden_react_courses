import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./car.css";

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const carouselArray = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];
  const intervalRef = useRef(null);

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    clearInterval(intervalRef.current);
    startTimer();
  }, [currentItem]);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % carouselArray.length);
    }, 15000);
  }

  function Carousel1() {
    return (
      <div className="car-item">
        <span className="car-section-1" id="car-section-1"></span>
        <span className="car-section-2">
          <h4>Data science</h4>
          <p>
            Data science involves extracting insights from data using
            statistical analysis and machine learning techniques. It combines
            programming, mathematics, and domain knowledge to solve complex
            problems and make data-driven decisions
          </p>

          {/* <span className="car-item-attrs">
            <p>Beginner Friendly</p>
            <p>8 Months</p>
            <p>8 Projects</p>
          </span> */}

          <span className="car-item-links">
            <Link to="">Learn More</Link>
            <Link to="">Enroll</Link>
          </span>
        </span>
      </div>
    );
  }

  function Carousel2() {
    return <div className="car-item">item 2</div>;
  }

  function Carousel3() {
    return <div className="car-item">item 3</div>;
  }

  function Carousel4() {
    return <div className="car-item">item 4</div>;
  }

  function Carousel5() {
    return <div className="car-item">item 5</div>;
  }

  function handleNext() {
    setCurrentItem((prevItem) => (prevItem + 1) % carouselArray.length);
  }

  function handleBack() {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + carouselArray.length) % carouselArray.length
    );
  }

  function handleNav(index) {
    setCurrentItem(index);
  }

  return (
    <div className="carousel-cont">
      <div className="carousel-item">
        <div className="carousel-item-nav">
          <button onClick={handleBack}>
            <FaArrowAltCircleLeft />
          </button>
        </div>
        {React.createElement(carouselArray[currentItem])}
        <div className="carousel-item-nav">
          <button onClick={handleNext}>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div id="carousel-nav">
        {carouselArray.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNav(index)}
            style={{
              backgroundColor:
                index === currentItem ? "#23d06a" : "transparent",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
