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
      <div id="footer-body">footer</div>
      <div id="footer-foot">footer</div>
    </footer>
  );
}
