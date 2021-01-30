import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Project from "./Project";
import { updateSearch } from "../redux/actions";

function Home() {
    const projects = useSelector(state => state.project.projects);
    const searchValue = useSelector(state=>state.project.search);
    const dispatch = useDispatch();
    //array to store search filtered items
    var filtered = [];
    if(searchValue!==""){
        filtered = projects.filter(project=>{
            return project.title.toLowerCase().indexOf(searchValue.toLowerCase())!==-1;
        });
    }else{
        filtered=[...projects];
    }
    return (
        <>
            <div className = "home-container">
                <div className="search-bar">
                    <input type="text" value={searchValue} onChange={(e)=>dispatch(updateSearch(e.target.value))} placeholder="Search Project using title..."/>
                </div>
                <div className="bdr"></div>
                {projects.length===0 &&<div className="empty">No Projects!</div>}
                {filtered.map((project,index)=>(
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

