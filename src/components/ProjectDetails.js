import React,{useState} from 'react';
import { useSelector } from "react-redux";
import AddIssue from "./AddIssue";
import SingleIssue from "./SingleIssue";

function ProjectDetails() {
    const [showAddIssue, setShowAddIssue] = useState(false);
    const project = useSelector(state => state.project.currentProject);
    const [search, setSearch] = useState("");
    var filtered = [];
    const issues = project.issues;
    if(search!==""){
        filtered = issues.filter(issue=>{
            return issue.title.toLowerCase().indexOf(search.toLowerCase())!==-1;
        });
    }else{
        filtered = [...issues];
    }
    return (
        <>
            <div className="project-details-container">
                <h2>
                    {project.title}
                </h2>
                <div className="description">
                    {project.description}
                </div>
                <div className="info-btn">
                    <div className="info">
                        <div className="author">
                        Author : {project.author}
                        </div>
                        <div className="date">
                            Date : {project.date}
                        </div>
                    </div>
                </div>

                {showAddIssue===true && <AddIssue
                    setShowAddIssue = {setShowAddIssue}
                />}
                {showAddIssue===false && <button onClick={()=>setShowAddIssue(true)}>
                        Add Issue
                </button>}
                

                
                <div className="search-bar">
                        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search issue ...."/>
                </div>
                
                {project.issues.length===0 && <div className="noissues">No issues for this project!</div>}
                {filtered.map((issue,index)=>(
                    <SingleIssue
                        issue={issue}
                        key={index}
                    />
                ))}
            </div>
        </>
       
    )
}

export default ProjectDetails;
