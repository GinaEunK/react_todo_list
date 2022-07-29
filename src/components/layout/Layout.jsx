import React, { useState } from "react";
import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";

function Layout() {
  const [todolist, setTodoList] = useState([]);

  return (
    <div>
      <Header />
      <Form todolist={todolist} setTodoList={setTodoList} />
      <List todolist={todolist} setTodoList={setTodoList} />
    </div>
  );
}

export default Layout;
