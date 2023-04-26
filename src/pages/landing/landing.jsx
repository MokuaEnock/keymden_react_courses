import { Link } from "react-router-dom";
import "./landing.css";

export default function Landing() {
  return (
    <main id="landing">
      <section id="landing-1">
        <div id="landing-1-1">
          <p className="par-0">Join the next cohort</p>
          <h1>
            Build <strong>your</strong> skills <br />
            Any time anywhere
          </h1>
          <p className="par1">
            We provide 100% remote courses so that they can fit your needs and
            for you to study from wherever you want.
          </p>
          <span id="landing-buttons">
            <Link to="/find_course">Find course</Link>
            <Link to="/apply">Join Keymden</Link>
          </span>
        </div>
        <div id="landing-1-2"></div>
      </section>

      <div id="landing-div">
        <h2>
          <strong>Our</strong> partners
        </h2>
        <p>
          Meet some of the partners that believe in the talent we produce, and
          hire our graduates.
        </p>
        <div></div>
      </div>

      <section id="landing-2">
        <p>Why Keymden?</p>
        <h2>
          Keymden students get hired. We've helped thousands of students land
          their dream jobs.
        </h2>
        <p>
          We retain the top graduates from each cohort and offer them
          opportunities.
        </p>
        <div id="landing-2-cont">
          <span className="landing-2-cont"></span>
          <span className="landing-2-cont"></span>
          <span className="landing-2-cont"></span>
          <span className="landing-2-cont"></span>
          <span className="landing-2-cont"></span>
        </div>

        <div id="landing-2-cont1">
          <span>
            <h3>Join a global community</h3>
            <p>
              Be part of a network of tech lovers and career changers from all
              over the world
            </p>
          </span>

          <span>
            <img src="#" alt="image" />
            <img src="#" alt="image" />
            <img src="#" alt="image" />
            <img src="#" alt="image" />
          </span>
        </div>

        <div id="landing-2-cont2">
          <span>
            <h4>1000+</h4>
            <p>GRADUATED STUDENTS</p>
          </span>

          <span>
            <h4>90%</h4>
            <p>EMPLOYMENT RATE</p>
          </span>

          <span>
            <h4>50+</h4>
            <p>PARTNER ORGANIZATIONS</p>
          </span>

          <span>
            <h4>3+</h4>
            <p>GRADUATED STUDENTS</p>
          </span>
        </div>
      </section>
      
      <section id="landing-3">
        <h2>
          Browse our <strong>popular</strong> courses.
        </h2>
        <p>
          Have a look at what you will learn in each course. Enroll for the next
          cohort to upskill.
        </p>
        <div id="landing-3-cont"></div>
      </section>

      <section id="landing-1"></section>
      <section id="landing-1"></section>
      <section id="landing-1"></section>
    </main>
  );
}
