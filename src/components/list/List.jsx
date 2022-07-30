import React from "react";
// import { useState } from "react";
import "./style.css";

import Todo from "../todo/Todo";

function List({ todoList, setTodoList }) {
  console.log(todoList);
  function delTodo(id) {
    setTodoList(todoList.filter((element) => element.id !== id));
  }

  function checkDone(id) {
    console.log(id);
    const todo_list = todoList.map((el) => {
      if (el.id === id) {
        return { ...el, isDone: !el.isDone };
      } else {
        return { ...el };
      }
    });
    setTodoList(todo_list);
  }
  console.log(todoList);

  return (
    <div className="list_container">
      <h1>Working!!💪</h1>

      <div className="todo_container">
        {todoList.map((e, index) => {
          if (e.isDone === false) {
            return (
              <Todo
                key={index}
                todoList={e}
                setTodoList={setTodoList}
                delTodo={delTodo}
                checkDone={checkDone}
              />
            );
          }
          return null;
        })}
      </div>

      <h1>Done!!🥳</h1>

      <div className="todo_container">
        {todoList.map((e, index) => {
          if (e.isDone === true) {
            return (
              <Todo
                key={index}
                todoList={e}
                setTodoList={setTodoList}
                delTodo={delTodo}
                checkDone={checkDone}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default List;
