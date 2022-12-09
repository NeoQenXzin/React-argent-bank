import { createStore, combineReducers } from "redux";
import dataUserReducer from "./Reducers/dataUserReducer";
import logUserReducer from "./Reducers/logUserReducer";

const rootReducers = combineReducers({
  dataUserReducer,
  logUserReducer,
});

const store = createStore(rootReducers);

export default store;
