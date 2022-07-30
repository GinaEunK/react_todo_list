import React from "react";
import { useState } from "react";
import "./style.css";

function Form({ todoLists, setTodoLists }) {
  const writeTodo = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todoList, setTodoList] = useState(writeTodo);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodoList({ ...todoList, [name]: value, id: todoLists.length + 1 });
  };
  console.log(setTodoList);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodoLists([...todoLists, todoList]);
    setTodoList(writeTodo);
  };

  console.log(todoList);

  return (
    <form onSubmit={onSubmitHandler} className="add_box">
      <div className="input_group">
        <label className="add_label">제목</label>
        <input
          type="text"
          className="add_input"
          value={todoList.title}
          name="title"
          onChange={onChangeHandler}
        ></input>

        <label className="add_label">내용</label>
        <input
          type="text"
          className="add_input"
          value={todoList.body}
          name="body"
          onChange={onChangeHandler}
        ></input>
      </div>
      <button className="add_btn">추가하기</button>
    </form>
  );
}

export default Form;
