import { combineReducers } from "redux";
import projectReducer from "./reducers/projectReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    project : projectReducer
});

const persistConfig ={
    key : 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;