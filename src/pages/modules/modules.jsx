import { Link } from "react-router-dom";
import "./modules.css";

export default function Modules() {
  return (
    <main id="modules">
      <section id="modules-1">
        We have the following courses:
        <Link to="/modules/data_science">Data Science</Link>
      </section>
    </main>
  );
}
