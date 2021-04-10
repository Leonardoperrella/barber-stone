import styled from "styled-components";
import { GlobalnWrapStyled } from "../../components/GlobalWrap/style";

export const ContainerForm = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    margin: 0;
    left: -0px !important;
    border-radius: 0;
    transform: initial;
    padding: 0px;
    width: 50vw;
    background-color: rgb(27 40 69 / 90%);
    height: 100vh !important;
    max-height: 100vh !important;
  }
`;

export const ContainerLogin = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    margin: 0;
    right: -0px !important;
    border-radius: 0;
    transform: initial;
    padding: 0px;
    width: 50vw;
    height: 100vh !important;
    max-height: 100vh !important;

    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.35);
      height: 100vh;
      width: 100%;
    }
  }
`;

export const ButtonWrap = styled.button`
  padding: 0px;
  outline: none;
  border: 0;
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  margin-top: 90px;
  cursor: pointer;
`;

export const ElemP = styled.p`
  font-size: 18px;
`;

export const H1Login = styled.h1`
  margin-top: 6rem;
  font-size: 3.5rem !important;
  padding: 0 70px;
  z-index: 1;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
