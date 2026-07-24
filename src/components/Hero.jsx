import "../styles/hero.css";
import profile from "../assets/images/professionalpic.jpeg";
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
    return(
            <section id="home" className="hero">
                <div className="hero-content">

    <p className="greeting">
      Hello, I'm
    </p>

    <h1>
      ARQAM MURAD
    </h1>

    <h2>
      Aspiring Software Engineer&
      <br/>
      Computer Science Student
    </h2>

    <p className="description">
      Building modern web applications with React js,Node js,Mongo DB,Express JS.
    </p>
      <div className="Btns">
                <button className="hireMe" onClick={scrollToContact}>Hire Me</button> 
             <button className="downloadResume"onClick={Downloading}>Download Resume</button>
                </div>
               
                </div>
               <div className="profilePic">
                    <img src={profile} alt="profile"/>
                </div>
            </section>
           
    );
}
export default Hero;