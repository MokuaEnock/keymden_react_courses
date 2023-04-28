import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  let navigate = useNavigate();

  function redirect() {
    navigate("/contact");
  }
  return (
    <header>
      <div id="header">
        <Link to="/" className="logo">
          Keymden
        </Link>
        <nav>
          <Link to="/admissions">Admissions</Link>
          <Link to="/modules">Courses</Link>
          <Link to="/teams">Organizations</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/about">About</Link>
        </nav>
        <button id="contact-us" onClick={redirect}>
          Contact Us
        </button>
      </div>
    </header>
  );
}
