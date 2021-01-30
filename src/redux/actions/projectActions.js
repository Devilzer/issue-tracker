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