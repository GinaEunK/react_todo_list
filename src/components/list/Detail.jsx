import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container>
        <Box>
          <div>
            <Box_Header>
              <div>ID</div>
              <BoxButton
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로
              </BoxButton>
            </Box_Header>
            <DetailTitle>리액트</DetailTitle>
            <DetailBody>리액트를 뿌시자</DetailBody>
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

const Box_Header = styled.div`
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
