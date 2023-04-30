import { Carousel } from "react-bootstrap";
import "./car.css";

export default function CourseCarousel() {
  return (
    <div className="my-carousel-container">
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <div className="my-carousel-item">
            <p>First slide</p>
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="my-carousel-item">
            <p>Second slide</p>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="my-carousel-item">
            <p>Third slide</p>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
