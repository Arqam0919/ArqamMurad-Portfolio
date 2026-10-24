import "../styles/project.css";
import tictac from "../assets/images/tic-tac-toe.png";
import gitc from "../assets/pdfs/versioncontrolcourseera.jpg";
import fiver from "../assets/pdfs/CourseraFiverr.jpg";
import reactb from "../assets/pdfs/Courserareactbasics.jpg";

const project=[
    {img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",name:"Cafe Murad",Github:"https://cafe_murad.vercel.app"},
    {img:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=85",name:"Notes Management System",Github:"https://github.com/Arqam0919/NOTES-MANAGEMENT-SYSTEM-MERN-"},
    {img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",name:"Learning Management System",Github:"https://github.com/Arqam0919/lms-mern-project"},
    {img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",name:"FinVault AI",Github:"MIT App Inventer"},
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
        <a className="skills" key={p.name} href={p.Github} target="_blank" rel="noreferrer">
            <img src={p.img} alt={`${p.name} project preview`}/>
            <p className="imgName">{p.name}</p>
            <p className="link">{p.Github}</p>
        </a>
    ));

}
const renderCertificate=()=>{
    return certificate.map((c)=>(
<div className="pdfTitle" key={c.name}>
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