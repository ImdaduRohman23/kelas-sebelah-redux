import { combineReducers } from "redux";
import stateReducer from "./resultReducer";
import dataReducer from "./fetchDataReducer";


const rootReducer = combineReducers({
    stateReducer,
    dataReducer
})

export default rootReducer;