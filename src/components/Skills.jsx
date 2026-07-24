import "../styles/skill.css";
import{FaReact,FaNodeJs,FaHtml5,FaGitAlt,FaGithub,FaCss3Alt,FaDatabase} from "react-icons/fa";
import {SiJavascript,SiExpress,SiMongodb,SiTailwindcss,SiCplusplus}from "react-icons/si";
const Arr=[
    {icon:<FaReact/>,name:"React Js"},
    {icon:<FaNodeJs/>,name:"Node Js"},
        {icon:<SiExpress/>,name:"Express Js"},
    {icon:<SiMongodb/>,name:"Mongo DB"},

    {icon:<SiJavascript/>,name:"JavaScript"},
    {icon:<FaHtml5/>,name:"Html 5"},
        {icon:<FaCss3Alt/>,name:"Css3"},
    {icon:<SiTailwindcss/>,name:"Tailwind Css"},

        {icon:<FaGitAlt/>,name:"Git"},
    {icon:<FaGithub/>,name:"GitHub"},
    {icon:<FaDatabase/>,name:"MySql"},
    {icon:<SiCplusplus/>,name:"C++"},


];
const renderskills=()=>{
    return Arr.map((skill)=>(
        <div className="skillcard">
            <div className="skilllogo" key={skill.name}>
                {skill.icon}
            </div>
            <h3>{skill.name}</h3>
        </div>
    )

    );
}
const Skillmain=()=>{
    return(
        <section className="skillsection" id="skills">
        <p className="sectiontag">My Skills</p>
<h2>Technologies I have worked With</h2>
<div className="skillsgrid">
    {renderskills()}
</div>
        </section>
    );
}
export default Skillmain;
