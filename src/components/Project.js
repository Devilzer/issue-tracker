import React from 'react';
import { useDispatch } from "react-redux";
import { setCurrentProject } from "../redux/actions";
function Project({project}) {
    const dispatch = useDispatch();

    return (
        <div className="project-container">
            <div className="name" onClick={()=>dispatch(setCurrentProject(project))}>
                {project.title}
            </div>
            <div className="description">
                {project.description}
            </div>
            <div className="info">
                <div className="author">
                    Author : {project.author}
                </div>
                <div className="date">
                    Created on : {project.date}
                </div>
            </div>
        </div>
    )
};

export default Project;
