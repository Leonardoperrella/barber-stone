import styled from "styled-components";

export const SpanError = styled.span`
  font-size: 1.25rem;
  color: #ec8989;
  text-align: center;
  margin: 5px;
`;

export const FormUpdate = styled.form`
  max-width: 923px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  max-width: 416px;
  width: 90vw;
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
  outline: none;
`;

export const Label = styled.p`
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-size: 2rem;
  line-height: 38px;
  color: #f7f4f3;
  margin: 0;

  @media (min-width: 912px) {
    max-width: ${(props) => props.isDesktop && `873px`};
    width: ${(props) => props.isDesktop && `873px`};
  }
`;

export const ButtonForm = styled.button`
  max-width: 416px;
  width: 90vw;
  height: 63px;
  border: 4px solid #f7f4f3;
  border-radius: 10px;
  background-color: transparent;
  font-family: "Bebas Neue", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 38px;
  color: #f7f4f3;
  margin: 10px;
  outline: none;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;

export const DivInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 10px;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
