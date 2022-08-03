import { createStore } from "redux";
import { combineReducers } from "redux";
import DetailTodo from "../modules/DetailTodo";

const rootReducer = combineReducers({
  DetailTodo: DetailTodo,
});
const store = createStore(rootReducer);

export default store;
