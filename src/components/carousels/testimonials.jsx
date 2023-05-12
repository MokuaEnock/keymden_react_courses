import "./tezt.css";

import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

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
        <span
          className="testimonial-item-image"
          id="testimonial-item-image-1"
        ></span>
        <span className="testimonial-item-quote">
          <FaQuoteRight />
        </span>
        <span className="testimonial-item-info">
          <p>
            Keymden helped upsacle in my career after i took their Data Science
            course, i secured employemnt 2 months after finishing the course.
          </p>
          <h3>Shaman Adebayo</h3>
          <h5>
            CTO <strong>Adept Technologies</strong>
          </h5>
        </span>
      </div>
    );
  }

  function Testimonial2() {
    return (
      <div className="testimonial-item" id="testimonial-item2">
        <span
          className="testimonial-item-image"
          id="testimonial-item-image-2"
        ></span>
        <span className="testimonial-item-quote">
          <FaQuoteRight />
        </span>
        <span className="testimonial-item-info">
          <p>
            With no background in Computer Science Keymden has helped me to
            transition into the field of data and code.
          </p>
          <h3>Vutisyu Deng</h3>
          <h5>
            Software Engineer <strong>Chromium</strong>
          </h5>
        </span>
      </div>
    );
  }

  function Testimonial3() {
    return (
      <div className="testimonial-item" id="testimonial-item3">
        <span
          className="testimonial-item-image"
          id="testimonial-item-image-3"
        ></span>
        <span className="testimonial-item-quote">
          <FaQuoteRight />
        </span>
        <span className="testimonial-item-info">
          <p>
            With the help of Keymden I was able to found my company and the
            skills that i learnt there have helped me run my company.
          </p>
          <h3>John Kamau</h3>
          <h5>
            Founder <strong>Woost</strong>
          </h5>
        </span>
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
