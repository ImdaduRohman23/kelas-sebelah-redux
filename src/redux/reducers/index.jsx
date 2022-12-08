import { combineReducers } from "redux";
import navbarReducer from "./navbarReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    navbarReducer,
    dataReducer
});

export default rootReducer;