import { combineReducers } from "redux";
import projectReducer from "./reducers/projectReducer";

const rootReducer = combineReducers({
    project : projectReducer
});

export default rootReducer;