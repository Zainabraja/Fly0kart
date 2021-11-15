import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
const rootReducer = combineReducers({ user: adminReducer });

export default rootReducer;
