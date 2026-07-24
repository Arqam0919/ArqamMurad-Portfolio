import "../styles/project.css";
import lms from "../assets/images/arm-lms.png";
import  finvault from "../assets/images/FinVault.png";
import tictac from "../assets/images/tic-tac-toe.png";
import gitc from "../assets/pdfs/versioncontrolcourseera.jpg";
import fiver from "../assets/pdfs/CourseraFiverr.jpg";
import reactb from "../assets/pdfs/Courserareactbasics.jpg";

const project=[
    {img:lms,name:"Learning Management System",Github:"https://github.com/Arqam0919/lms-mern-project"},
    {img:finvault,name:"FinVault AI",Github:"MIT App Inventer"},
    {img:tictac,name:"Tic Tac Toe", Github:"https://github.com/Arqam0919/Tic-Tac-Toe"}
];
const certificate=[
{pdf: gitc,name:"Version Control(Git and Github)"
},
{pdf:fiver,name:"Getting started with Fiverr for Freelancers"},
{pdf:reactb,name:"React Basics"}
];
const render=()=>{
    return project.map((p)=>(
        <div className="skills">
            <img src={p.img} alt={p.name}/>
            <p className="imgName">{p.name}</p>
            <p className="link">{p.Github}</p>
        </div>
    ));

}
const renderCertificate=()=>{
    return certificate.map((c)=>(
<div className="pdfTitle">
    <img src={c.pdf} alt={c.name}/>
    <p className="pdfname">{c.name}</p>
</div>
    )

    );
}
const ProjectDetails=()=>{
    return(
        <section className="projectsCertificate" id="projects">
           <p className="main_skills">Projects</p>
<h2 className="somebuilt">Some Things I've Built</h2>

<div className="projects">
    {render()}
</div>
           
 <p className="main_certificate"> My Certificates</p>
                       <h2 className="someget">My Achievements</h2>
                        <div className="certificate">
                       {renderCertificate()}
            </div>
           

        </section>

    );
}
export default ProjectDetails;