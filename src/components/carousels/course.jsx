import React, { useState, useEffect } from "react";
import "./car.css";

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0); // State to track the current item index
  const carouselArray = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];
  let interval; // Variable to hold the interval

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, []); // Empty dependency array to run the effect only once on mount

  function startTimer() {
    interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % carouselArray.length);
    }, 15000); // Delay of 15 seconds (15000 milliseconds)
  }

  function Carousel1() {
    return <div className="car-item">item 1</div>;
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
    resetTimer();
  }

  function handleBack() {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + carouselArray.length) % carouselArray.length
    );
    resetTimer();
  }

  function handleNav(index) {
    setCurrentItem(index);
    resetTimer();
  }

  function resetTimer() {
    clearInterval(interval);
    startTimer();
  }

  return (
    <div className="carousel-cont">
      <div className="carousel-item">
        <div className="carousel-item-nav">
          <button onClick={handleBack}>Back</button>
        </div>
        {React.createElement(carouselArray[currentItem])}
        <div className="carousel-item-nav">
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      <div id="carousel-nav">
        {carouselArray.map((_, index) => (
          <button key={index} onClick={() => handleNav(index)}></button>
        ))}
      </div>
    </div>
  );
}
