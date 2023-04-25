import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./modules.css";

export default function Modules() {
  let navigate = useNavigate();

  function redirect() {
    navigate("/modules/data_science");
  }

  return (
    <main id="modules">
      <section id="modules-1">
        We have the following courses:
        <Link to="data_science">Data Science</Link>
        <button onClick={redirect}>Data science</button>
      </section>
    </main>
  );
}
