import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div id="header">
        <Link to="/" className="logo">
          Keymden
        </Link>
        <nav>
          <Link to="/modules">Courses</Link>
          <Link to="/teams">For Organizations</Link>
          <Link to="/about">About</Link>
        </nav>
        {/* <button id="contact-us">Contact Us</button> */}
        <button id="contact-us">Apply</button>
      </div>
    </header>
  );
}
