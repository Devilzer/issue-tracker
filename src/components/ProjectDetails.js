import React,{useState} from 'react';
import { useSelector } from "react-redux";
import AddIssue from "./AddIssue";

function ProjectDetails() {
    const [showAddIssue, setShowAddIssue] = useState(false);
    const project = useSelector(state => state.project.currentProject);
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
                        <input type="text" placeholder="Search issue ...."/>
                </div>
                <div className="label-bar">
                    <h3 >
                        bug
                    </h3>
                    <h3>
                        invalid
                    </h3>
                    <h3 >
                        wontfix
                    </h3>
                    <h3 >
                        documentation
                    </h3>
                    <h3 >
                        duplicate
                    </h3>
                    <h3 >
                        enhancement
                    </h3>
                </div>
                {project.issues.length===0 && <div className="noissues">No issues for this project!</div>}
            </div>
        </>
       
    )
}

export default ProjectDetails;
