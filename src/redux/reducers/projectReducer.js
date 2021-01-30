const initialState = {
    projects : [],
    currentProject : {},
};

const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case "ADD_PROJECT":
            return state;
        default:
            return state;
    }
};

export default reducer;