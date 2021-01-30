import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const store = createStore(rootReducer,composeWithDevTools());
const persistor = persistStore(store);
export {store,persistor};