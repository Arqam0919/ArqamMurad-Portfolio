import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
const downloadResume = () => {
  window.open("/My_Resume.pdf", "_blank");
};
function NavBar(){
    return(
        <nav className="ourNav">
  <div className="navContainer">

    <div className="mylogo">
      <img src={logo} alt="logo" />
    </div>

    <ul className="otherComponent">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects&Certificates</a></li>
      <li><a href="#contact">Contact</a></li>
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