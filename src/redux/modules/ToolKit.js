import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값 만들어주기
const initialState = {
  d_list: [
    {
      id: 1,
      title: "리액트",
      body: "공부하자",
      isDone: false,
    },
    {
      id: 2,
      title: "운동하기",
      body: "꼭",
      isDone: true,
    },
  ],
};

const todoSlice = createSlice({
  name: "addtodo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.d_list.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.d_list = state.d_list.filter((item) => item.id !== action.payload);
    },
    checkTodo: (state, action) => {
      state.d_list.map((item) => {
        if (item.id === action.payload) {
          return (item.isDone = !item.isDone);
        } else {
          return item;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
