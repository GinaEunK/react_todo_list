import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const navigate = useNavigate();

  const todo_List = useSelector((state) => state.todoSlice.d_list);
  console.log(todo_List);
  const { id } = useParams();
  const todo = todo_List.find((item) => item.id === id);
  console.log(todo);

  return (
    <div>
      <Container>
        <Box>
          <div>
            <BoxHeader>
              <div>ID:{todo.id}</div>
              <BoxButton
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로
              </BoxButton>
            </BoxHeader>
            <DetailTitle>{todo.title}</DetailTitle>
            <DetailBody>{todo.body}</DetailBody>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Detail;

const Container = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #6f5f90;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoxHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;
const BoxButton = styled.button`
  border: 1px none #fff;
  height: 40px;
  width: 120px;
  background-color: #758eb7;
  border-radius: 12px;
  display: flex;
  color: white;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;
const DetailTitle = styled.h1`
  padding: 0 24px;
`;
const DetailBody = styled.main`
  padding: 0 24px;
`;
