import styled from "styled-components";
import { GlobalnWrapStyled } from "../../components/GlobalWrap/style";

export const ContainerForm = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    margin: 0;
    right: -0px !important;
    border-radius: 0;
    transform: initial;
    width: 50vw;
    background-color: rgb(27 40 69 / 90%);
  }
`;

export const ContainerRegister = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    margin: 0;
    left: -0px !important;
    border-radius: 0;
    transform: initial;
    width: 50vw;

    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.35);
      height: 130vh;
      width: 100%;
      padding-bottom: 150px;
    }
  }
`;

export const H1Title = styled.h1`
  z-index: 1;
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
  z-index: 1;
`;

export const H1Register = styled.h1`
  margin-top: 6rem;
  font-size: 3.5rem !important;
  padding: 0 70px;
  z-index: 1;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
