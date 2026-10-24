import "../styles/hero.css";
import profile from "../assets/images/professionalpic.jpeg";
import { useRef } from "react";
const Downloading = () => {
  const link = document.createElement("a");
  link.href = "/My_Resume.pdf";
  link.download = "My_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const scrollToContact = () => {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
};
const Hero=()=>{
    const heroRef = useRef(null);
    const handlePointerMove = (event) => {
      const bounds = heroRef.current?.getBoundingClientRect();
      if (!bounds) return;
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      heroRef.current.style.setProperty("--pointer-x", `${x}`);
      heroRef.current.style.setProperty("--pointer-y", `${y}`);
    };

    const resetPointer = () => {
      heroRef.current?.style.setProperty("--pointer-x", "0");
      heroRef.current?.style.setProperty("--pointer-y", "0");
    };

    return(
            <section id="home" className="hero" ref={heroRef} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
                <div className="hero-content">
    <p className="eyebrow"><span /> Available for opportunities</p>
    <p className="greeting">Hello, I’m</p>
    <h1>ARQAM<br /><em>MURAD</em></h1>
    <h2>Software engineer &amp;<br />computer science student.</h2>
    <p className="description">I turn thoughtful ideas into useful digital experiences through clean code, clear interfaces, and a little bit of curiosity.</p>
      <div className="Btns">
                <button className="hireMe" onClick={scrollToContact}>Hire Me</button> 
             <button className="downloadResume"onClick={Downloading}>Download Resume</button>
                </div>
               
                </div>
               <div className="profilePic" aria-label="Interactive 3D portrait">
                    <div className="profileHalo" />
                    <div className="profileCard">
                      <img src={profile} alt="Arqam Murad" />
                      <span className="portraitLabel">FULL STACK<br /><strong>DEVELOPER</strong></span>
                    </div>
                    <span className="orbit orbitOne" />
                    <span className="orbit orbitTwo" />
                </div>
            </section>
           
    );
}
export default Hero;