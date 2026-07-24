import NavBar from "./components/Navbar.jsx";
 import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skillmain from "./components/Skills.jsx";
import ProjectDetails from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
function App() {
 
  return(
<>
  <h1>Hello Arqam 👋</h1>
  <p>Welcome to my Portfolio.</p>
  <NavBar/>
   <Hero/>
  <About/> 
  <Skillmain/>
  <ProjectDetails/>
  <Contact/>
</>
  );
}

export default App;
