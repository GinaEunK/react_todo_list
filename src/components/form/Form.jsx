import React from "react";
import { useState } from "react";
import "./style.css";

function Form({ todolist, setTodoList }) {
  

  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);

  const writeTodo = () => {
    const todo_data = {
      title: title_ref.current.value,
      content: content_ref.current.value,
    };
    setTodoList([...todolist, todo_data]);
  };

  console.log(todolist);

  return (
    <div className="add_box">
      <div className="input_group">
        <label className="add_label">제목</label>
        <input type="text" className="add_input" ref={title_ref}></input>

        <label className="add_label">제목</label>
        <input type="text" className="add_input" ref={content_ref}></input>
      </div>
      <button className="add_btn" onClick={writeTodo}>
        추가하기
      </button>
    </div>
  );
}

export default Form;
