import React from "react";
import "./style.css";

function Todo({ todolist }) {
  console.log(todolist);
  return (
    <div className="todo_box">
      <h2 className="todo_title"></h2>
      <p></p>
      <div className="btn_set">
        <button className="btn todo_del">삭제하기</button>
        <button className="btn todo_done">완료!</button>
      </div>
    </div>
  );
}

export default Todo;
