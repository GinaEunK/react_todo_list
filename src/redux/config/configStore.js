import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../modules/ToolKit";

const store = configureStore({
  reducer: {
    todoSlice: todoSliceReducer,
  },
});

export default store;
