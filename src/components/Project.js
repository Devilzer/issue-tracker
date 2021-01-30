import React from 'react';

function Project({project}) {
    
    return (
        <div className="project-container">
            <div className="name">
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
