import styled from "styled-components";
import { GlobalnWrapStyled } from "../../components/GlobalWrap/style";

export const ContainerForm = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    margin: 0;
    right: 0;
    border-radius: 0;
    width: 50vw;
    background-color: rgb(27 40 69 / 90%);
  }
`;

export const ContainerRegister = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    margin: 0;
    left: 0;
    border-radius: 0;
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &::before {
      content: "";
      display: block;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.75);
      height: 100vh;
      width: 50vw;
      padding-bottom: 0;
    }
  }
`;

export const H1Title = styled.h1`
  z-index: 1;
  margin: 35px 0 0;
  font-weight: 400;
`;

export const ButtonWrap = styled.button`
  padding: 0px;
  outline: none;
  border: 0;
  background-color: transparent;
  margin: 0 auto;
  position: relative;
  margin-top: 25px;
  cursor: pointer;
`;

export const ElemP = styled.p`
  font-size: 1.5rem;
  z-index: 1;
  margin: 25px 0;
`;

export const H1Register = styled.h1`
  font-size: 3.5rem !important;
  font-weight: 400;
  padding: 0 70px;
  z-index: 1;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
  @media (min-width: 1094px) {
    margin: 50px 0;
  }
`;
