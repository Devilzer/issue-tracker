import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { addProject } from "../redux/actions";

function AddProject() {
    const dispatch = useDispatch();
    const today = new Date();
    const [value, setValue] = useState({
        id : Date.now(),
        title : "",
        description : "",
        date : today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear(),
        author : "",
        issues : []
    });

    //handle add project function
    const handleSubmit = ()=>{
        if(value.title==="" || value.author==="" || value.description===""){
            return;
        }
        dispatch(addProject(value));

        setValue({...value,id:Date.now(),title:"",author:"",description:"",date :today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()});
    }
    return (
        <>
            <div className="add-product-container">
                <div className="heading">
                 Create a new project
                </div>
                <div className="input-box">
                    <span>
                        Project name <span className="required">*</span>
                    </span>
                    <input type="text" value={value.title} onChange={(e)=>setValue({...value,title:e.target.value})}/>
                    <span>
                        Author name <span className="required">*</span>
                    </span>
                    <input type="text" value={value.author} onChange={(e)=>setValue({...value,author:e.target.value})}/>
                    <span>
                         Description <span className="required">*</span>
                    </span>
                    <textarea value={value.description} onChange={(e)=>setValue({...value,description:e.target.value})}/>
                    <button onClick={handleSubmit}>
                        Add project
                    </button>
                </div>
            </div> 
        </>
    )
}

export default AddProject;
