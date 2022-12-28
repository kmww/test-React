import { tasks } from "./tasks";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ tasks });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export type RootState = ReturnType<typeof rootReducer>;
