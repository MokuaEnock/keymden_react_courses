import "./tezt.css";

import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TesttimonialCarousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const carouselArray = [Testimonial1, Testimonial2, Testimonial3];
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

  function Testimonial1() {
    return (
      <div className="testimonial-item" id="testimonial-item1">
        Testimony 1
      </div>
    );
  }
  function Testimonial2() {
    return (
      <div className="testimonial-item" id="testimonial-item2">
        Testimony 2
      </div>
    );
  }
  function Testimonial3() {
    return (
      <div className="testimonial-item" id="testimonial-item3">
        Testimony 3
      </div>
    );
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
    <div className="testimon-cont">
      <div className="testimon-item">
        <div className="testimon-item-nav">
          <button onClick={handleBack}>
            <FaArrowAltCircleLeft />
          </button>
        </div>
        {React.createElement(carouselArray[currentItem])}
        <div className="testimon-item-nav">
          <button onClick={handleNext}>
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
      <div id="testimon-nav">
        {carouselArray.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNav(index)}
            style={{
              backgroundColor: index === currentItem ? "#23d06a" : "white",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
