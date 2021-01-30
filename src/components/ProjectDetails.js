import React from 'react';
import { useSelector } from "react-redux";
function ProjectDetails() {
    const project = useSelector(state => state.project.currentProject);
    console.log(project);
    return (
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
                <button>
                    Add Issue
                </button>
            </div>
       </div>
    )
}

export default ProjectDetails;
