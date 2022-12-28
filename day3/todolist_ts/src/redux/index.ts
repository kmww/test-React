import { tasks } from "./tasks";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({ tasks });

export const store = createStore(rootReducer);
