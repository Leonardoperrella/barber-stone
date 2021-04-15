import styled from "styled-components";

export const FormComponent = styled.form`
  padding: 10px;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  color: #f7f4f3;
  margin: 15px 0 5px;
`;

export const Input = styled.input`
  border: 3px solid #f7f4f3;
  border-radius: 10px;
  background-color: transparent;
  color: #f7f4f3;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  padding: 10px;
  font-size: 1.5rem;
  outline: none;
`;

export const SpanError = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: #ec8989;
  text-align: center;
  margin-top: 11px;
`;

export const ButtonForm = styled.button`
  width: 100%;
  border: 3px solid #f7f4f3;
  color: #f7f4f3;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: block;
  padding: 5px;
  outline: none;
  margin-top: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #f7f4f3;
    width: 0;
    height: 100%;
    transition: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    background-color: white;
    color: #1b2845;
    transition: 0.3s;
  }
`;

export const CardLogin = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
