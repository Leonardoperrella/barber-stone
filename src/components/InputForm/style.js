import styled, { keyframes } from "styled-components";

export const Label = styled.label``;

export const animationInput = keyframes`
  from{
    opacity:0;
    transform: translateY(-30px);
  }
  to{
    opacity:initial;
    transform: initial;
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  margin: 1rem 0 1.7rem 0;

  animation: ${animationInput} 0.3s forwards;
`;

export const Input = styled.input`
  width: 300px;
  height: 63px;
  border: 4px solid #f7f4f3;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  padding: 5px;
  font-size: 20px;
  line-height: 38px;
  color: #f7f4f3;
  border: 2px solid ${({ error }) => (error ? "#ec8989" : "#b7bfcc")};
  outline: none;
  margin: 0;

  @media (min-width: 1024px) {
    width: 470px;
    height: 4rem;
  }
`;

export const Span = styled.span`
  transition: 0.2s;
  position: absolute;
  top: ${({ activeInput }) => (activeInput ? "12px" : "50%")};
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${({ error }) => (error ? "#ec8989" : "#f7f4f3")};

  font-size: ${({ activeInput }) => (activeInput ? ".8rem" : "1rem")};
`;

export const MessageError = styled.p`
  position: absolute;
  color: #ec8989;
  left: 0.5rem;
  bottom: -2.1rem;
  font-size: 0.875rem;
`;
