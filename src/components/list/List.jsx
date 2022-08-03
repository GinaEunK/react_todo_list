import React from "react";
// import { useState } from "react";
import "./style.css";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { deleteTodo, checkTodo } from "../../redux/modules/DetailTodo";

function List() {
  const todo_List = useSelector((state) => state.DetailTodo.d_list);
  console.log(todo_List);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <List_container>
        <h1>Working!!💪</h1>

        <Todo_container>
          {todo_List.map((item) => {
            if (item.isDone === false) {
              return (
                <div className="todo_box" key={item.id}>
                  <Detaillink>
                    <div
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                      key={item.id}
                    >
                      상세보기
                    </div>
                  </Detaillink>
                  <h2 className="todo_title">{item.title}</h2>
                  <p>{item.body}</p>
                  <div className="btn_set">
                    <button
                      className="btn todo_del"
                      onClick={() => {
                        dispatch(deleteTodo(item.id));
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn todo_check"
                      onClick={() => {
                        dispatch(checkTodo(item.id));
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Todo_container>

        <h1>Done!!🥳</h1>

        <Todo_container>
          {todo_List.map((item) => {
            if (item.isDone === true) {
              return (
                <div className="todo_box" key={item.id}>
                  <Detaillink>
                    <div
                      onClick={() => {
                        navigate(`/detail/${item.id}`);
                      }}
                    >
                      상세보기
                    </div>
                  </Detaillink>
                  <h2 className="todo_title">{item.title}</h2>
                  <p>{item.body}</p>
                  <div className="btn_set">
                    <button
                      className="btn todo_del"
                      onClick={() => {
                        dispatch(deleteTodo(item.id));
                      }}
                    >
                      삭제하기
                    </button>
                    <button
                      className="btn todo_check"
                      onClick={() => {
                        dispatch(checkTodo(item.id));
                      }}
                    >
                      {item.isDone ? "취소" : "완료"}
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Todo_container>
      </List_container>
    </div>
  );
}

export default List;

const Detaillink = styled.div`
  text-decoration: none;
  cursor: pointer;
`;

const List_container = styled.div`
  margin: auto 50px;
`;
const Todo_container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 24px;
  flex-wrap: wrap;
  min-height: 200px;
`;
