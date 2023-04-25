import { Link, NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div></div>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/modules">Modules</Link>
      </NavLink>
    </header>
  );
}
