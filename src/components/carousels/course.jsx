import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./car.css";

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState(0);
  const carouselArray = [Carousel1, Carousel2, Carousel3];
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
    return (
      <div className="car-item">
        <span className="car-section-1" id="car-section-2"></span>
        <span className="car-section-2">
          <h4>Data Analytics</h4>
          <p>
            Data analytics involves analyzing and interpreting data to uncover
            valuable insights and trends. This course covers various topics
            including data cleaning, exploratory data analysis, statistical
            analysis, data visualization, and more. Gain the skills required to
            make data-driven decisions and solve complex business problems.
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

  function Carousel3() {
    return (
      <div className="car-item">
        <span className="car-section-1" id="car-section-3"></span>
        <span className="car-section-2">
          <h4>Software Engineering</h4>
          <p>
            Software engineering involves the systematic application of
            engineering principles to develop, design, test, and maintain
            software systems. It encompasses the entire software development
            lifecycle, including requirements analysis, coding, testing,
            deployment, and maintenance. It emphasizes efficient
            problem-solving, collaboration, and adherence to software
            development best practices to create reliable and scalable software
            solutions.
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

  // function Carousel4() {
  //   return (
  //     <div className="car-item">
  //       <span className="car-section-1" id="car-section-1"></span>
  //       <span className="car-section-2">
  //         <h4>Data science</h4>
  //         <p>
  //           Data science involves extracting insights from data using
  //           statistical analysis and machine learning techniques. It combines
  //           programming, mathematics, and domain knowledge to solve complex
  //           problems and make data-driven decisions
  //         </p>

  //         {/* <span className="car-item-attrs">
  //           <p>Beginner Friendly</p>
  //           <p>8 Months</p>
  //           <p>8 Projects</p>
  //         </span> */}

  //         <span className="car-item-links">
  //           <Link to="">Learn More</Link>
  //           <Link to="">Enroll</Link>
  //         </span>
  //       </span>
  //     </div>
  //   );
  // }

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
              backgroundColor: index === currentItem ? "#23d06a" : "white",
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
