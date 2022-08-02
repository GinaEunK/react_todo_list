import React from "react";
import "./style.css";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

function Todo({ todoList, delTodo, checkDone }) {
  const navigate = useNavigate();
  console.log(todoList);
  return (
    <div className="todo_box">
      <Detaillink>
        <div
          onClick={() => {
            navigate("/detail");
          }}
        >
          상세보기
        </div>
      </Detaillink>
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
        {!todoList.isDone ? (
          <button
            className="btn todo_done"
            onClick={() => {
              checkDone(todoList.id);
            }}
          >
            완료!
          </button>
        ) : (
          <button
            className="btn todo_canl"
            onClick={() => {
              checkDone(todoList.id);
            }}
          >
            취소!
          </button>
        )}
      </div>
    </div>
  );
}

export default Todo;

const Detaillink = styled.div`
  text-decoration: none;
  cursor: pointer;
`;
