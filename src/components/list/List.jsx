import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

function List({ todolist, setTodoList }) {
  console.log(todolist);
  function delTodo(id) {
    setTodoList(todolist.filter((element) => element.id !== id));
  }
  function checDone(id) {
    const todo_list = todolist.map((e) => {
      if (e.id === id) {
        return { ...e, isDone: !e.isDone };
      } else {
        return { ...e };
      }
    });
    setTodoList(todo_list);
  }

  return (
    <div className="list_box">
      <h1>Working!!💪</h1>
      <div className="todo_container">
        <Todo
          todolist={todolist}
          setTodoList={setTodoList}
          delTodo={delTodo}
          checDone={checDone}
        />
        ;
      </div>

      <h1>Done!!🥳</h1>
      <div>
        <Todo />
      </div>
    </div>
  );
}

export default List;
