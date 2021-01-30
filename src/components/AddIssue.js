import React,{useState} from 'react';
import { useSelector } from "react-redux";
function AddIssue({setShowAddIssue}) {
    const project = useSelector(state => state.project.currentProject);
    const [value, setValue] = useState({
        title : "",
        description:"",
        author:"",
        labels:[],
        id : Date.now()
    });
    const [label, setlabel] = useState({
        bug :false,
        invalid:false,
        wontfix:false,
        documentation:false,
        duplicate:false,
        enhancement:false
    });

    var bugcls;
    var invalidcls;
    var wontfixcls;
    var doccls;
    var duplicatecls;
    var enhmcls;

    if(label.bug){
        bugcls = "selected";
    }
    else{
        bugcls = "";
    }

    if(label.invalid){
        invalidcls = "selected";
    }
    else{
        invalidcls = "";
    }

    if(label.wontfix){
        wontfixcls = "selected";
    }
    else{
        wontfixcls = "";
    }

    if(label.documentation){
        doccls = "selected";
    }
    else{
        doccls = "";
    }
    if(label.duplicate){
        duplicatecls = "selected";
    }
    else{
        duplicatecls = "";
    }
    if(label.enhancement){
        enhmcls = "selected";
    }
    else{
        enhmcls = "";
    }

    return (
        <>
           <div className="input-box">
                <span>
                    Issue name <span className="required">*</span>
                </span>
                <input type="text" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})}/>
                <span>
                    Author <span className="required">*</span>
                </span>
                <input type="text" value={value.author} onChange={(e)=>setValue({...value,author:e.target.value})}/>
                <span>
                        Description <span className="required">*</span>
                </span>
                <textarea value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}/>
                <span>
                    Label
                </span>
                <div className="labels">
                    <h4 className={bugcls} onClick={()=>setlabel({...label,bug:!label.bug})}>bug</h4>
                    <h4 className={invalidcls} onClick={()=>setlabel({...label,invalid:!label.invalid})}>invalid</h4>
                    <h4 className={wontfixcls} onClick={()=>setlabel({...label,wontfix:!label.wontfix})}>wontfix</h4>
                    <h4 className={doccls} onClick={()=>setlabel({...label,documentation:!label.documentation})}>documentation</h4>
                    <h4 className={duplicatecls} onClick={()=>setlabel({...label,duplicate:!label.duplicate})}>duplicate</h4>
                    <h4 className={enhmcls} onClick={()=>setlabel({...label,enhancement:!label.enhancement})}>enhancement</h4>
                </div>
            </div>
            <button className="active" onClick={()=>setShowAddIssue(false)}>
                        Add Issue
            </button> 
        </>
    )
}

export default AddIssue;
