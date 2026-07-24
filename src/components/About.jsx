import "../styles/about.css";
import photo from "../assets/images/aboutme.png";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="photo">
        <img src={photo} alt="Arqam Murad working on laptop" />
      </div>

      <div className="details">

        <p className="sectionTag">ABOUT ME</p>

        <h2>Get to Know Me Better!</h2>

        <p className="desc">
          I'm a BS Computer Science student at the University of Central
          Punjab with a strong interest in Full Stack Web Development.
          I enjoy building responsive, user-friendly web applications
          using modern technologies while continuously improving my
          problem-solving and software development skills.
        </p>

        <div className="cards">

          <div className="card">
            <h3>🎓 Education</h3>

            <p>
              BS Computer Science
              <br />
              University of Central Punjab
              <br />
              Expected Graduation: 2028
            </p>
          </div>

          <div className="card">
            <h3>📍 Location</h3>

            <p>
              Lahore, Pakistan
              <br />
              Available for
              <br />
              Remote & On-site Opportunities
            </p>
          </div>

          <div className="card">
            <h3>💻 Current Focus</h3>

            <p>
              MERN Stack Development
              <br />
              React.js
              <br />
              Node.js
              <br />
              Express.js
              <br />
              MongoDB
            </p>
          </div>

          <div className="card">
            <h3>🌐 Languages</h3>

            <p>
              English
              <br />
              Urdu
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;