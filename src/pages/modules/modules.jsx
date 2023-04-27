import "./modules.css";
import CourseQuiz from "../../components/CourseQuiz/course";

export default function Modules() {
  return (
    <main id="modules">
      <section id="modules-1">
        <h2>
          Discover the <strong>right</strong> course for you.
        </h2>
        <p>
          Browse through our catalogue find something that excites you and apply
          for the next cohort to start learning today.
        </p>
      </section>

      <CourseQuiz />
    </main>
  );
}
