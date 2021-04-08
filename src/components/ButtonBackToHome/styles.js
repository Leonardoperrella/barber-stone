import styled from "styled-components";

export const Button = styled.button`
  background-color: #bb8c4b;
  color: #f7f4f3;
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 1.2rem;
  padding: 10px;
  outline: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: block;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #f7f4f3;
    width: 0;
    transition: 0.3s;
    height: 100%;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #bb8c4b;
  }

  & i {
    margin-right: 10px;
  }
`;
