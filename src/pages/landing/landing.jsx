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

      <section id="landing-2"></section>
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
