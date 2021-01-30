import React from 'react';

function AddProject() {
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
                    <input type="text"/>
                    <span>
                        Author name <span className="required">*</span>
                    </span>
                    <input type="text"/>
                    <span>
                         Description <span className="required">*</span>
                    </span>
                    <textarea/>
                    <button>
                        Add project
                    </button>
                </div>
            </div> 
        </>
    )
}

export default AddProject;
