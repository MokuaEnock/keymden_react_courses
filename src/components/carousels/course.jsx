import React, { useState, useEffect } from "react";
import "./car.css";

export default function App() {
  const [currentItem, setCurrentItem] = useState(0); // State to track the current item index
  const carouselArray = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];

  useEffect(() => {
    // Function to automatically transition to the next item after 5 seconds
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % carouselArray.length);
    }, 5000);

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, []); // Empty dependency array to run the effect only once on mount

  function Carousel1() {
    return <div>item 1</div>;
  }

  function Carousel2() {
    return <div>item 2</div>;
  }

  function Carousel3() {
    return <div>item 3</div>;
  }

  function Carousel4() {
    return <div>item 4</div>;
  }

  function Carousel5() {
    return <div>item 5</div>;
  }

  function handleNext() {
    setCurrentItem((prevItem) => (prevItem + 1) % carouselArray.length);
  }

  function handleBack() {
    setCurrentItem(
      (prevItem) => (prevItem - 1 + carouselArray.length) % carouselArray.length
    );
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
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}
