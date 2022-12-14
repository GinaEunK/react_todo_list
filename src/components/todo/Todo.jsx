import React from "react";
import "./style.css";

function Todo({ todoList, delTodo, checkDone }) {
  console.log(todoList);
  return (
    <div className="todo_box">
      <h2 className="todo_title">{todoList.title}</h2>
      <p>{todoList.body}</p>
      <div className="btn_set">
        <button
          className="btn todo_del"
          onClick={() => {
            delTodo(todoList.id);
          }}
        >
          삭제하기
        </button>
        <button
          className="btn todo_check"
          onClick={() => {
            checkDone(todoList.id);
          }}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
