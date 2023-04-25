import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div></div>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/modules">Courses</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="/teams">For Organizations</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLink>
    </header>
  );
}
