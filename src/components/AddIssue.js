import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addIsssue } from "../redux/actions";

function AddIssue({setShowAddIssue}) {
    const dispatch = useDispatch();
    const project = useSelector(state => state.project.currentProject);
    const [value, setValue] = useState({
        title : "",
        description:"",
        author:"",
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

    const handleSubmit = () =>{
        if(value.author==="" || value.title==="" || value.description===""){
            return;
        }
        const issue = {
            id : value.id,
            title : value.title,
            author : value.author,
            description : value.description,
            labels : label
        }
   
        project.issues = [...project.issues,issue];
        console.log(project);
        dispatch(addIsssue(project));
        setValue({...value,title:"",description:"",author:"",id:Date.now()});
        setlabel({...label,bug:false,invalid:false,documentation:false,duplicate:false,wontfix:false,enhancement:false});
        setShowAddIssue(false);
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
            <button className="active" onClick={handleSubmit}>
                        Add Issue
            </button> 
        </>
    )
}

export default AddIssue;
