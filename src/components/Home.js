import React from 'react';
import { useSelector } from "react-redux";

function Home() {
    const state = useSelector(state => state);
    
    return (
        <>
            <div className = "home-container">
                <div className="search-bar">
                    <input type="text" placeholder="Search Project using title..."/>
                </div>
                <div className="bdr"></div>
                <div className="project-container">
                    <div className="name">
                        Project name
                    </div>
                    <div className="description">
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content
                    </div>
                    <div className="info">
                        <div className="author">
                           Author : Deepak
                        </div>
                        <div className="date">
                            Created on : 22/12/21
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Home;

