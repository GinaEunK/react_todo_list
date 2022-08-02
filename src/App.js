import React from "react";
import { Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import { Routes } from "react-router-dom";
import Detail from "./components/list/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
