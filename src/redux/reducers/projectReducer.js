const initialState = {
    projects : [],
    search : "",
    currentProject : {},
    page:"home"
};

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case "ADD_PROJECT":
            return{
                ...state,
                projects : [...state.projects,action.payload]
            };
        case "UPDATE_SEARCH":
            return{
                ...state,
                search :action.payload
            };
        case "UPDATE_PAGE":
            return{
                ...state,
                page : action.payload
            };
        case "SET_CURRENT_PROJECT":
            return{
                ...state,
                currentProject : action.payload
            };
        case "ADD_ISSUE":
            const addIssueIndex = state.projects.findIndex(obj=>obj.id===action.payload.id);
            let projectsAfter = state.projects;
            projectsAfter[addIssueIndex] = action.payload;
            return{
                ...state,
                projects : projectsAfter
            };
        default:
            return state;
    }
};

export default reducer;