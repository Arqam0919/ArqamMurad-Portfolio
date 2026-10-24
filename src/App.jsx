import NavBar from "./components/Navbar.jsx";
 import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skillmain from "./components/Skills.jsx";
import ProjectDetails from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Effects from "./components/Effects.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("isVisible");
      });
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return(
<>
  <Effects/>
  <NavBar/>
   <Hero/>
  <About/> 
  <Skillmain/>
  <ProjectDetails/>
  <Contact/>
  <Footer/>
</>
  );
}

export default App;
