const initialState = {
    projects : [],
    search : "",
    currentProject : {},
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
        default:
            return state;
    }
};

export default reducer;