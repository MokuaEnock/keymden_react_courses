import "./modules.css";
import CourseQuiz from "../../components/CourseQuiz/course";
import { Link } from "react-router-dom";

export default function Modules() {
  return (
    <main id="modules">
      <section id="modules-1">
        <h2>
          Discover courses in <strong>web</strong> & <strong>data</strong>
        </h2>
        <p>
          Browse through our catalogue find something that excites you and apply
          for the next cohort to start learning today.
        </p>
        <span>
          <button>All Courses</button>
          <button>Take Quiz</button>
        </span>
      </section>
    </main>
  );
}
