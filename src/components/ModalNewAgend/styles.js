import styled from "styled-components";

import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

export const Button = styled.button`
  background-color: #f7f4f3;
  padding: 20px;
  outline: none;
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
  color: #1b2845;
  font-family: "Bebas Neue", cursive;
  font-size: 2rem;
  border: 5px solid #f7f4f3;
  margin: 10px 0;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #1b2845;
    width: 0;
    transition: 0.3s;
    height: 100%;
    border-radius: 20px;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: #f7f4f3;
  }

  & i {
    font-size: 3rem;
    margin-right: 10px;
  }
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FadeStyled = styled(Fade)`
  outline: none;
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  max-width: 496px;
  background-color: #1b2845;
  text-align: center;
  align-items: center;
  overflow-y: scroll;
  max-height: 75vh;

  & h2 {
    font-size: 2.5rem;
    font-weight: 400;
    margin: 10px;
  }

  & h4 {
    font-size: 2rem;
    font-weight: 400;
    margin: 10px;
  }
`;
