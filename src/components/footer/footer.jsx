import { Link } from "react-router-dom";
import "./footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">
      <div id="footer-head">
        <h3>Keymden</h3>

        <span>
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
        </span>
      </div>
      <div id="footer-body">
        <span className="foot-cont">
          <h4>Courses</h4>
          <Link to="/modules/data_science">Data Science</Link>
          <Link to="">Data Analysis</Link>
          <Link to="">Advanced Excel</Link>
          <Link to="">Stata and SPSS</Link>
          <Link to="">Backend Development</Link>
          <Link to="">Frontend Development</Link>
        </span>

        <span className="foot-cont">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/partner">Partner with Us</Link>
        </span>

        <span className="foot-cont">
          <h4>Resources</h4>
          <Link to="/alumni">Alumni</Link>
          <Link to="/community">Community</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/events">Events</Link>
        </span>
        <span className="foot-cont1">
          <h3>Newsletters</h3>
          <form className="newsletter-form">
            <input type="text" placeholder="Enter Email"></input>
            <button type="submit">Get Newsletter</button>
          </form>
        </span>
      </div>

      <div id="footer-foot">
        <p>&copy; 2023 Keymden Solutions. All rights reserved.</p>
        <span>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </span>
      </div>
    </footer>
  );
}
