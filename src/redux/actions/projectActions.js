export const addProject = (project)=>{
    return{
        type : "ADD_PROJECT",
        payload : project
    };
};

export const updateSearch = (value)=>{
    return{
        type : "UPDATE_SEARCH",
        payload : value
    };
};

export const updatePage = (value)=>{
    return{
        type : "UPDATE_PAGE",
        payload : value
    };
};

export const setCurrentProject = (project)=>{
    return{
        type : "SET_CURRENT_PROJECT",
        payload : project
    };
};

export const addIsssue = (project)=>{
    return{
        type : "ADD_ISSUE",
        payload: project
    };
}