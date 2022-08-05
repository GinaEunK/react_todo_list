import React from "react";
import { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/ToolKit";
import shortId from "shortid";

const Form = () => {
  const dispatch = useDispatch();
  const shortid = shortId.generate();

  const todo = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todoList, setTodoList] = useState(todo);
  console.log(todoList);
  // console.log(todo);
  // => 빈배열 12-16번째줄 들어옴

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodoList({ ...todoList, [name]: value, id: shortid });
  };

  const writeTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(todoList));
    // setTodoList([...todoList, todo]);
  };

  // console.log(todoList);
  // 빈배열 들어옴

  return (
    <form onSubmit={writeTodo} className="add_box">
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
};

export default Form;
