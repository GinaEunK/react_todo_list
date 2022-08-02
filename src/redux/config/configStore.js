import { createStore } from "redux";
import { combineReducers } from "redux";
//combineReducers = 리듀서를 묶어주는거
const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;
