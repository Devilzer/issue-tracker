import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { resolveIssue } from "../redux/actions";

function SingleIssue({issue}) {
    const dispatch = useDispatch();
    const project = useSelector(state => state.project.currentProject);
    const handleResolve = ()=>{
        var index = project.issues.findIndex(obj=>obj.id===issue.id);
        var obj = {
            projectID : project.id,
            issueIDX : index
        };
        dispatch(resolveIssue(obj));
    }
    return (
        <div className="issue-container">
                    <div className="header">
                        <h3>
                            {issue.title}
                        </h3>
                        <h3 className="reslove" onClick={handleResolve}>
                            Reslove <i className="fas fa-check"></i>
                        </h3>
                    </div>
                    
                    <div className="description">
                        {issue.description}
                    </div>
                    <div className="author">
                        Author : {issue.author}
                    </div>
                    <div className="labels">
                        {issue.labels.bug===true && <div className="bug">bug</div>}

                        {issue.labels.invalid===true && <div className="invalid">invalid</div>}

                        {issue.labels.wontfix===true && <div className="wontfix">wontfix</div>}
                        
                        {issue.labels.documentation===true && <div className="documentation">documentation</div>}

                        {issue.labels.duplicate===true && <div className="duplicate">duplicate</div>}
                        
                        {issue.labels.enhancement===true && <div className="enhancement">enhancement</div>}
                        
                    </div>
                </div>
    )
}

export default SingleIssue;
