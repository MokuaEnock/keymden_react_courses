import "./modules.css";

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
          <button>Take a Quiz</button>
        </span>
      </section>

      <section className="courses-container" id="course-1">
        <div className="course-header">
          <h2>Data Science</h2>
          <button>+</button>
        </div>
      </section>

      <section className="courses-container" id="course-2">
        <div className="course-header">
          <h2>Data Science</h2>
          <button>+</button>
        </div>
      </section>
    </main>
  );
}
