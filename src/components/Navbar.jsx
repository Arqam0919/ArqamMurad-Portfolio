import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { useState } from "react";
const downloadResume = () => {
  window.open("/My_Resume.pdf", "_blank");
};
function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);
    return(
        <nav className="ourNav">
  <div className="navContainer">

    <div className="mylogo">
      <img src={logo} alt="logo" />
    </div>

    <button className={`menuToggle ${isOpen ? "isOpen" : ""}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
      <span /><span /><span />
    </button>
    <ul className={`otherComponent ${isOpen ? "isOpen" : ""}`}>
      <li><a href="#home" onClick={closeMenu}>Home</a></li>
      <li><a href="#about" onClick={closeMenu}>About</a></li>
      <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
      <li><a href="#projects" onClick={closeMenu}>Projects&amp;Certificates</a></li>
      <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      <li className="mobileResumeItem">
        <button className="resumeBtn mobileResume" onClick={() => { closeMenu(); downloadResume(); }}>
          Resume
        </button>
      </li>
    </ul>


<button
  className="resumeBtn"
  onClick={downloadResume}
>
  Resume
</button>

  </div>
</nav>
    );
}
export default NavBar;