import React from 'react';
import { useSelector } from "react-redux";
import Project from "./Project";

function Home() {
    const projects = useSelector(state => state.project.projects);

    return (
        <>
            <div className = "home-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search Project using title..."/>
                </div>
                <div className="bdr"></div>
                {projects.length===0 &&<div className="empty">No Projects!</div>}
                {projects.map((project,index)=>(
                    <Project
                        key = {index}
                        project = {project}
                    />
                ))}
            </div>      
        </>
    )
}

export default Home;

