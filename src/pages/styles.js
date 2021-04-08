import styled from "styled-components";

export const ErrorMsgDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://image.freepik.com/free-vector/404-error-page-found-illustration_199563-1.jpg");
  background-repeat: repeat;
`;

export const ButtonWrap = styled.button`
  padding: 0px;
  outline: none;
  border: 0;
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  top: 15px;
  cursor: pointer;

  @media (min-width: 1024px) {
    top: -9px;
  }
`;
