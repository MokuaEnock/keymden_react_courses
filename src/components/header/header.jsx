import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsSticky(!isTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function redirect() {
    navigate("/contact");
  }

  return (
    <header className={isSticky ? "sticky" : ""}>
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
