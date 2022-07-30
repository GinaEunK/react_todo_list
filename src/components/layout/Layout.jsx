import React, { useState } from "react";
import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

function Layout() {
  const [todoList, setTodoList] = useState([
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
  ]);

  return (
    <div>
      <Header />
      <Form todoLists={todoList} setTodoLists={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default Layout;
